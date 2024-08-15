require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

const indexRouter = require('./routes/index');
const historiesRouter = require('./routes/histories');
const categoriesRouter = require('./routes/categories');
const questionsRouter = require('./routes/questions');
const answersRouter = require('./routes/answers');
const recordsRouter = require('./routes/records');

const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/histories', historiesRouter);
app.use('/categories', categoriesRouter);
app.use('/questions', questionsRouter);
app.use('/answers', answersRouter);
app.use('/records', recordsRouter);

module.exports = app;