var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');
var Bing = require('node-bing-api')({accKey:'760be1bf3b644b1483fc57ced3a81e20'});
var searchTerm = require('../models/searchTerm');
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/searchTerms', function(err) {
    if (err) throw err;
});
app.use(bodyParser.json());
app.use(cors());
/* GET home page. */
/*the * will allow to add any query after that whether they exist or not*/
app.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
app.get('/api/recentsearchs',function(req,res){
  searchTerm.find({},(err,data) =>{
    res.json(data);
  });
});

app.get('/api/imagesearch/:searchVal*',function(req,res,next){
  var {searchVal} = req.params;
  var {offset} = req.query;
  var data = new searchTerm({
    searchVal,
    searchDate: new Date()
  });
  data.save(err ={
    if(err){
      res.send("Error saving database");
    }
 })

var searchOffset;
//Does offset exist;
 if(offset){
   if(offset = 1){
     searchOffset = 1;
     offset = 0;
   }
   else if(offset > 1){
     searchOffset = offset +1;
   }
 }
 Bing.images(searchVal,{
   top: (10 * offset),
   skip: (10 * offset)
   /*use something different then response to make sure .get doesn't get confuse in here*/
 },function(err,rez,body){
   var bingData =[];
   for(var i = 0; i < 10; i++){
     bingData.push({
        url: body.value[i].webSearchUrl,
        snippet: body.value[i].name,
        thumbnail: body.value[i].thumbnailUrl,
        context: body.value[i].hostPageDisplayUrl
       });
   }
   res.json(bingData);
 });
});

module.exports = app;
