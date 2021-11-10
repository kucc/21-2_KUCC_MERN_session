const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const redis = require('redis');
const RedisStore = require('connect-redis')(session);
const dotenv = require('dotenv');

dotenv.config();
const redisClient = redis.createClient({
	url: `redis://${process.env.REDIS_HOST}:${process.env.REDIS_PORT}`,
	password: process.env.REDIS_PASSWORD,
});
const userRouter = require('./routes/user');

const app = express();

app.set(process.env.PORT || 'port');
app.use(morgan('dev'));

// body-parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(process.env.COOKIE_SECRET));

// session
const sessionOption = {
	resave: false,
	saveUninitialized: false,
	secret: process.env.COOKIE_SECRET,
	cookie: {
		httpOnly: true,
		secure: false,
	},
	store: new RedisStore({ client: redisClient }),
};
app.use(session(sessionOption));

// postman 귀찮을 때
// app.get('/', (req, res) => {
// 	res.send('hello');
// });
app.use('/user', userRouter);

// 404 처리 미들웨어
app.use((req, res, next) => {
	const error = new Error(`${req.method} ${req.url} 라우터가 없습니다`);
	error.status = 404;
	next(error);
});

// 에러 처리 미들웨어
app.use((err, req, res, next) => {
	res.locals.message = err.message;
	res.locals.error = process.env.NODE_ENV !== 'production' ? err : {};
	res.status(err.status || 500);
});

app.listen(app.get('port'), () => {
	console.log();
});
