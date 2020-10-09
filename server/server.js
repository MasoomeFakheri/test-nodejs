const express = require('express')

var app = express();

app.get('/', (req, res)=>{
    res.status(404).send({
        error: 'Page not found.',
        name: 'Todo App v1.0'
    });
})
app.get('/users', (req, res)=>{
    res.send([
        {name: 'Masoud', age: 28},
        {name: 'Morvarid', age: 25},
        {name: 'Reza', age: 45},   
    ])
})


app.listen(3000, ()=>{
    console.log('Application run on port 3000')
})

module.exports.app = app