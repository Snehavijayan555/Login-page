var express = require("express");
var router = express.Router();

const  credential = {
    email : "snehavijayan666@gmail.com",
    password : "sneha123"
}

const movies=[
    {
        name:"83",
        year:2021,
        Language:"Hindi",
        photo:"https://etimg.etb2bimg.com/photo/88343631.cms"
    },
    {
        name:"Shutter Island",
        year:2010,
        Language:"English",
        photo:"https://www.slashfilm.com/img/gallery/shutter-island-ending-explained/intro-1631889373.jpg"
    },
    {
        name:"Interstellar",
        year:2014,
        Language:"English",
        photo:"https://assets-in.bmscdn.com/discovery-catalog/events/et00019066-bhjnwdvguh-landscape.jpg"
    },
    {
        name:"Rorschach",
        year:2022,
        Language:"  Malayalam",
        photo:"https://gumlet.assettype.com/filmcompanion%2F2022-10%2Fce1541af-1147-403c-a8a7-2bda61539cd0%2FRorschach.jpg?format=auto"
    }
    
]

// login user
router.post('/login', (req, res)=>{
    if(req.body.email == credential.email && req.body.password == credential.password){
        req.session.user = req.body.email;
        res.redirect('/route/dashboard');
        //res.end("Login Successful...!");
    }else{
        res.end("Invalid Username")
    }
});

// route for dashboard
router.get('/dashboard', (req, res) => {
    if(req.session.user){
        res.render('dashboard', {user : req.session.user,movies: movies})
    }else{
        res.send("Unauthorize User")
    }
})

// route for logout
router.get('/logout', (req ,res)=>{
    req.session.destroy(function(err){
        if(err){
            console.log(err);
            res.send("Error")
        }else{
            res.render('base', { title: "Express", logout : "logout Successfully...!"})
        }
    })
})

module.exports = router;





