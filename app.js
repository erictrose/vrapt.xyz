console.log('app loading');

// Express, Firebase, and Handlebars
var express = require('express');
var firebase = require('firebase');
var exphbs = require('express-handlebars');
var app = express();

// Initialize Firebase
firebase.initializeApp({
  serviceAccount: {
    projectId: "###",
    clientEmail: "###",
    privateKey: "###"
  },
  databaseURL: "###"
});

// Test Firebase
var db = firebase.database();
console.log('Firebase Initialized');

// Use Handlebars
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// http://www.vrapt.xyz/
app.get('/', function (req, res) {
    // Reference Building 0 apartments
    var ref = db.ref("bld/0/apt");
    
    console.log('hit');
    
    // Once the reference has data
    ref.once("value", function(snapshot) {
        // Assign to apartments var
        apartments = snapshot.val();
        
        //create spacing array
        var floors = [],
            fws1 = [],
            aptaddr = [],
            aptname = [],
            aptaddrback = [];
        
        //push spacing to floors
        for(i=0;i<apartments.length;i++){
            //if its the first apt, just add the base height
            if(i === 0){
                floors.push(5.441);
            } else {
                floors.push(5.441 + ((i)*3.817));
            };
        };
        
        //push spacing to fws1
        for(i=0;i<apartments.length;i++){
            //if its the first apt, just add the base height
            if(i === 0){
                fws1.push(7.34);
            } else {
                fws1.push(7.34 + ((i)*3.817));
            };
        };
        
        //push spacing to aptaddr
        for(i=0;i<apartments.length;i++){
            //if its the first apt, just add the base height
            if(i === 0){
                aptaddr.push(7.1);
            } else {
                aptaddr.push(7.1 + ((i)*3.817));
            };
        };
        
        //push spacing to aptname
        for(i=0;i<apartments.length;i++){
            //if its the first apt, just add the base height
            if(i === 0){
                aptname.push(7.7);
            } else {
                aptname.push(7.7 + ((i)*3.817));
            };
        };
        
        //push spacing to aptaddrback
        for(i=0;i<apartments.length;i++){
            //if its the first apt, just add the base height
            if(i === 0){
                aptaddrback.push(8.8);
            } else {
                aptaddrback.push(8.8 + ((i)*3.817));
            };
        };
        res.render('home', {apartmentsRef : apartments, 
                            floors : floors,
                            fws1 : fws1,
                            aptaddr : aptaddr,
                            aptname : aptname,
                            aptaddrback : aptaddrback
                           }, function(err, html) {
            res.send(html);
        });
    });
});

app.use('/static', express.static('public'));

app.listen(8001, function () {
  console.log('listening on port 8001');
});