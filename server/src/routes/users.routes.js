const express = require('express');
const usersRoutes = express.Router();
const usersController = require('../controllers/users.controller');

usersRoutes.get('/', usersController.getAllUsers);
usersRoutes.get('/:id', usersController.getUserById);

module.exports = usersRoutes;
