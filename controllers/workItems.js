const date = require('../generateDate.js');
const Task = require('../models/work');

//let toDoList =[]; //sisestatud andmete salvestamiseks, ajutine koht

exports.getWorkItems =  (req, res)=>{
    Task.fetchTasks(items => {
        let day = date.getDate();
        res.render("work.ejs", {date: day, workItems: items});
    });
    /*let day= date.getDate();
    const workList = Task.fetchTasks();*/
    /*let weekday= date.getWeekDay();
    console.log(day); */
    //res.render("work.ejs", {date: day, workItems: workList});

};

exports.postWorkItem = (req, res) => {
    const item = new Task(req.body.newTask);
    item.saveTask();

    /*let newTask = req.body.newTask;
    toDoList.push(newTask); //push lisab elementi massiivi sisse*/
    res.redirect("/work");
};

exports.deleteWorkItem= (req, res) => {
    console.log("Call work from delete" ,req.body.checkbox);
    Task.deleteWorkItem(req.body.checkbox);
    res.redirect('/work');

}