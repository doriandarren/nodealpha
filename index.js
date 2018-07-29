const express = require('express');
const app = express();

app.get('/',function(req, res){
    res.send('hello word');
});

app.get('/user',function(req, res){
    res.send(
        [{
            user:'dorian',
        },
        {   
            user:'Jonathan'
        }]
    );
});


app.listen(3000, function(){
    console.log('Servidor escuchando en http://localhost:3000');
});