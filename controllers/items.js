const date = require('../generateDate.js');
const Task =require('../models/task');
//let toDoList =[]; //sisestatud andmete salvestamiseks, ajutine koht

exports.getMainPage =  (req, res)=>{
    Task.fetchTasks(items => {
        let day = date.getDate();
        res.render("index.ejs", {date: day, toDoItems: items});
    });


    /*let weekday= date.getDate();
    const itemsList = Task.fetchTasks();*/
    /*let weekday= date.getWeekDay();
    console.log(day);*/
    //res.render("index.ejs", {date: weekday, toDoItems: itemsList});

};

exports.postNewItem = (req, res) => {
    //modeli task.js kasutamiseks tuleb see importeerida 
    const item = new Task(req.body.newTask);
    item.saveTask();

    /*let newTask = req.body.newTask;
    toDoList.push(newTask); //push lisab elementi massiivi sisse */
    res.redirect("/");
};

exports.deleteItem= (req, res) => {
    console.log("Call from delete" ,req.body.checkbox);
    Task.deleteItem(req.body.checkbox);
    res.redirect('/');

}