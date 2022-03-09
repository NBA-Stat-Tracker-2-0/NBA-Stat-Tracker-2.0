const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const { OAuth2Client } = require('google-auth-library');
const passport = require('passport');
const cors = require('cors');
const dotenv = require('dotenv');
const userRouter = require('./routes/userRouter');
const authroutes = require('./routes/auth.route');
const UserController = require('./controllers/UserController');
const PORT = 3000;
const app = express();

dotenv.config();

/**
 * handle parsing request body
 */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cookieParser());
app.use(passport.initialize());

/**
 * handle requests for static files
 */
app.use(express.static(path.resolve(__dirname, '../build')));

app.get('/', (req, res) =>
  res.status(200).sendFile(path.join(__dirname, '../client/index.html'))
);

app.use('/user', userRouter);

// Create a user in the database
// handle google oauth
app.post('/', UserController.authUser, (req, res) =>
  res.status(200).json(res.locals)
);

// Unknown route handler
app.use((req, res) => res.sendStatus(404));

// Global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 404,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

/**
 * start server
 */
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});

module.exports = app;
