const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mainPage= require('./routes/main');
const about= require('./routes/about');
const work = require('./routes/work');
//const date= require(__dirname+"/generateDate.js"); - pole vaja pärast main.js faili loomist
const getError = require('./routes/404');

//let toDoList =[]; //sisestatud andmete salvestamiseks, ajutine koht

const app = express();
app.set("view engine", ejs);
app.use(bodyParser.urlencoded({extetended: true}));
app.use(express.static("public"));

/*app.get("/", (req, res)=>{
    let day= date.getDate();
    let weekday= date.getWeekDay();
    console.log(day);
    res.render("index.ejs", {date: weekday, toDoItems: toDoList});

});

app.post("/", (req, res) => {
    let newTask = req.body.newTask;
    toDoList.push(newTask); //push lisab elementi massiivi sisse
    res.redirect("/");
});
liigutatud teise faili koos list massiiviga (items.js leitav)*/ 

//about lehe linkimine kõrvallehena
/*app.get("/about", (req, res) =>{
    res.render("about.ejs");
});*/

app.use(mainPage);
app.use(about);
app.use(work);
app.use(getError);


app.listen(3000, ()=>{
    console.log("Server is running on port 3000");
});