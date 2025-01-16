const path = require('path');
const fs = require('fs');
const pathFile = path.resolve(__dirname, '../../data/users.json');
const usersController = {};

usersController.getAllUsers = (req, res) => {
  fs.readFile(pathFile, (error, data) => {
    if (error) {
      return res.status(500).json({ error: 'Error reading file' });
    }
    const jsonData = JSON.parse(data);
    return res.status(200).json(jsonData);
  });
};

usersController.getUserById = (req, res) => {
  const userId = req.params.id;
  fs.readFile(pathFile, (error, data) => {
    if (error) {
      return res.status(500).json({ error: 'Error reading file' });
    } else {
      const jsonData = JSON.parse(data);
      const userFound = jsonData.find((user) => user.userId === userId);
      if (userFound) {
        res.status(200).json([userFound]);
      } else {
        res.status(404).json({ error: 'User not found' });
      }
    }
  });
};

module.exports = usersController;
