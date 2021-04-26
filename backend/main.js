var app = require('express');
var jwt = require('jwt-simple')
var application = app();
var cors = require('cors');
var bodyParser = require  ('body-parser');
var mongoose = require('mongoose');
var User = require('./moduls/User.js');
var post = [
    {'message':'welcom to start angular'},
    {'message': '& node js'},
    {'message': 'using angular material'}
   
]
application.use(cors());
application.use(bodyParser.json());
application.get('/post',(req, res) =>{
    res.send(post);
});
application.get('/users', async (req, res) =>{
    var user = await User.find({}, '-password-_v');
    res.send(user);
});


application.post('/register', (req, res) =>{
    console.log(req.body);
    var userData = req.body;

    var user = new User(userData);
    user.save((error, result) => {
        if (error) 
            console.log('userData', userData)
            console.log('Save Data Successfully');
            res.sendStatus(200);
        
        
    })
});
application.post('/login' , async (req ,res) => {
    console.log(req.body);
    var userData = req.body;
    var user = await User.findOne({email:userData.email});
    console.log(user);
    if (!user) {
        return req.status(401).send({message: 'Email or Password Invaild'});
        
    }
    if (userData.password != user.password) {
        return res.status(401).send({message: 'Email or Passwors Invaild'});
        
    }
    var paytoke = {};
    var token = jwt.encode(paytoke, '123');
    console.log("token", token);
    console.log(user);
    res.status(200).send({token});
});
mongoose.connect('mongodb+srv://David123:David@123@learnmangodb.awirf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
useNewUrlParser: true,
useUnifiedTopology: true
},(error)=>{
    if(!error){
        console.log('connection sucessfully')

    }
})
application.listen(1220);