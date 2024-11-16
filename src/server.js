const express = require('express');

const hbs = require('hbs');

const path = require('path');
const dotenv = require('dotenv');
require ('dotenv').config()

const app =express();

app.set('view engine', 'hbs');

app.set('views', __dirname + '/views');



const PORT =3000;



app.get('/', (req, res) => {
    
    res.render('index');
});


app.get('/about', (req, res) => {

    res.render('about');
});




app.get('/contact', (req, res) => {

    res.render('contact');
});



app.use((req, res) => {
    res.status(404).sendFile('./error 404.jpg' , {
        root: __dirname
    }); 
    

}
) 




app.listen(PORT, ()=>{
    console.log(`Servidor express escuchando en el puerto http://localhost:${PORT}`);
});