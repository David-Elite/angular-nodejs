var app = require('express')
var application = app()
var post = [
    {'message':'welcom to start angular'},
    {'message': '& node js'},
    {'message': 'using angular material'}
   
]
application.get('/post',(req, res) =>{
    res.send(post);
})
application.listen(1220);