const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');

const usersRoutes = require('./routes/users.routes');

app.use(cors());
app.use(express.json());
app.use('/api/users', usersRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
