var express = require('express');
var sessions = require('express-session'); // Charge le middleware de sessions
var bodyParser = require('body-parser'); // Charge le middleware de gestion des paramètres
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var path = require('path');
var app = express();
var user = require('user');
var mysql = require('mysql');
var session;

app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

/* On utilise les sessions */
app.use(sessions({secret: 'zbla', saveUninitialized: false, resave: false}))


/* Inscription */
.get('/inscription', function(req, res, next){
  session = req.session;
  res.render('pageapp-sigin.ejs',{name : session.userId});
})

.post('/inscription',urlencodedParser, function(req, res){
    user.verification(req.body.email, req.body.password, function(boolean){
      if( boolean == true ){
        res.redirect('/inscription');
        // faire aparaitre pseudo deja utilisé
      }else{
        user.register(req.body.email, req.body.password);
        res.redirect('/connection');
      };
    });
    
})

.get('/connection', function(req,res,next){
 
  res.render('pageapp-login.ejs', {name : session.userId});
})

.post('/connection', urlencodedParser, function(req,res){
  user.connection(req.body.email,req.body.password, function(boolean){
      session = req.session;
      if( boolean !== null){
        session.userId = boolean[0].id;
        return res.redirect('/');
      }else{
        return res.redirect('/connection');
        //compte inexistant
      }
    });
})

.get('/deconnection', function(req,res,next){
  req.session.destroy();
  res.redirect('/');
})


.get('/', function(req,res,next){
  session = req.session;
  res.render('index.ejs', {name : session.userId});
})


.get('/supprimer/:id', urlencodedParser, function(req,res,next){
  user.removeUser(req.body.name);
  res.redirect('/');
})

.get('/taskslist', function(req,res,next){
  user.showTask(session.userId, function(task){
    res.render('taskslist.ejs',{name : session.userId, task: task});
  })
})

.get('/task/supprimer/:id', function(req,res,next){
  user.removeTask(req.params.id);
  res.redirect('/taskslist');
})

.get('/contact', function(req,res,next){
  res.render('contact.ejs',{name : session.userId});
})

.get('/credits', function(req,res,next){
  res.render('credits.ejs',{name : session.userId});
})

.get('/fallback', function(req,res,next){
  res.render('fallback.ejs',{name : session.userId});
})

.get('/taskslist/modifier', urlencodedParser, function(req,res,next){
  user.modifTask(req.body.id, req.body.position, req.body.titre, req.body.description, req.body.date, req.body.idGroupe, req.body.valide);
  res.redirect('/taskslist');
})

.get('/taskslist/add', urlencodedParser, function(req,res,next){
  user.addTask(session.userId, req.body.position, req.body.titre, req.body.description, req.body.date, req.body.idGroupe);
  res.redirect('/taskslist');
})

.get('/taskslist/modifierGroup', function(req,res,next){
  user.modifTaskGroup(req.body.id, req.body.title, req.body.couleur);
  res.redirect('/taskslist');
})

.get('/index', function(req,res,next){
  res.redirect('/');
})


.listen(8080);