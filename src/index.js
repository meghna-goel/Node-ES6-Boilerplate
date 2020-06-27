import 'babel-polyfill';
import express, { Router } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 4000;
const App = express();
const router = Router();

router.get('/',(req, res) => {
    res.send('hello world!!!');
});

router.get('/',(req, res) => {
    res.send('hello world!');
});

App.use(router);

App.listen(PORT, () => {
    console.log(`Running on pORT: ${PORT}`);
});
