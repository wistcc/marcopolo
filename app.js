import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import exphbs from 'express-handlebars';

const app = express();
const Port = 8000;

app.engine('handlebars', exphbs({defaultLayout: 'layout'}));
app.set('view engine', 'handlebars');

app.use(express.static('dist/public'));
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//routes
app.get('/home', function (req, res) {
    res.render('home');
});

app.listen(Port, () => {
  console.log(`Server is listening on port ${Port}`);
});