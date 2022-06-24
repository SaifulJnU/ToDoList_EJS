const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

var items = [];
app.get('/', function(req, res){

var day="";
 
  options= {  //javascript object jekhane weekday, day, month, year properties ache

    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
  }

  
  var today = new Date();  

  day = today.toLocaleDateString("Bn", options);
   
  res.render("list", {kindOfDay: day, newListItem: items});  

});

app.post('/',function(req, res){
   
  var item =  req.body.newitem;

  items.push(item);

  res.redirect('/');

  //console.log("this is your item: "+item);

});

app.listen(3001, function(){
    console.log("Running server from 3001");
});