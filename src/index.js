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

//calling home.html in same folder
router.get('/home',(req, res) => {
    res.sendFile('./home.html',  { root: __dirname });
});

//calling all static file stateed in public folder
App.use('/public', express.static('public'));
App.use(router);

//calling one file using route for file in public and making public folder as root directory
router.get('/contact',(req, res) => {
    res.sendFile('./home.html',  { root: './public' });
});

App.listen(PORT, () => {
    console.log(`Running on pORT: ${PORT}`);
});
