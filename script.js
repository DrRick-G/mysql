let express = require('express');
let server = express();
let bodyParser = require('body-parser');
const connection = require('./database');
const UserQuery = require('./query');


server.set('views','./views')
server.set('veiw engine', 'ejs')

// parse application/x-www-form-urlencoded
server.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
server.use(bodyParser.json())

server.get('/', (req,res)=>{
    res.render('connexion.ejs')
})

connection.connect((err)=> {
    if (err) {
        console.log('Ereur de connexion a la base de données',err)
    }
    console.log('Connexion etablie')
    server.get('/',(req, res)=>{
    
        res.render('index.ejs')
    });
    
      
      server.post('/', (req,res)=>{
        console.log(req.body);
        let inscription = UserQuery.SetUser(req.body)
        console.log(inscription)
        if(inscription=='res'){
            res.send('Inscription réussie')
        }
       
    })
})
    
      






server.listen(8055);

// const express = require('express');
// const app = express();
// const port = process.env.PORT || 8055;

// app.get('/', (req, res) => {
//     // res.set('Content-Type', 'text/html');
//     res.sendFile(./index.html);
// });

// app.listen(port, () => {
//     console.log('Server app listening on port ' + port);
// });