const express = require('express');
const port = 8000;
const app = express();
const path = require('path');



const passport = require('passport');
// const MongoStore = require('connect-mongo')(session);
const cookieParser = require('cookie-parser');
const session = require('express-session');
const expressLayouts = require('express-ejs-layouts');
const db = require('./config/mongoose');
const MongoStore = require('connect-mongo');
const fs = require('fs');
const bodyParser = require('body-parser');

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(passport.initialize());
app.use(passport.session());
// app.use(passport.setAuthenticatedUser);
// app.use(session({
//     name: 'Admin',
//     // To be changed at deployment
//     secret: env.session_cookie_key,
//     saveUninitialized: false,
//     resave: false,
//     cookie: {
//         maxAge: (20000 * 60 * 100)
//     },
//     store: new MongoStore({
//         mongooseConnection: db,
//         autoRemove: 'disabled'

//     }, function(err) {
//         if (err) {
//             console.log('Error in MongoStore');
//         }
//     })

// }));



app.use(bodyParser.json());
app.use(express.urlencoded({
    extended: true
}));


app.use(express.static('./assets'));
app.use(cookieParser());
app.use('/uploads', express.static(__dirname + '/uploads'));


app.use('/', require('./routes/admin'));
app.listen(port, function(err) {
    if (err) {
        console.log('Error', err);
        return;
    }

    console.log('Server is running on port ', port);
})