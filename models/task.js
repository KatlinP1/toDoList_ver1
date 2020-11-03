const fs= require('fs');
const path = require('path');
const pathToRegularTaskFile = path.join(path.dirname(process.mainModule.filename), 'data', 'regularTask.json');


//let toDoList =[]; //list sisestatud andmete salvestamiseks

module.exports = class Task{
    constructor(task){
        this.description= task;
    }

    saveTask(){
        //püüame failist maha lugeda sisu
        fs.readFile(pathToRegularTaskFile, (error, fileContent)=> {
            //ajutine koht kuhu sisu salvestatakse
            let tasks = [];

            if(!error){
                tasks= JSON.parse(fileContent);
            }else {
                console.log(error);
            }

            tasks.push(this); //this on see millele kutstakse meetod
            fs.writeFile(pathToRegularTaskFile, JSON.stringify(tasks), (error) => {
                console.log('Error', error);
            });  
            
        });
        //toDoList.push(this);
    }

    //callBack on tühi objekt
    static fetchTasks(callBack){
        //return toDoList;
        fs.readFile(pathToRegularTaskFile, (error, fileContent) =>{
            if(error){
                //antud return elab ainult selle meetodi sees, lõpetab töö, kui meetod läbi
                //return [];
                callBack([]);
            }
            //return JSON.parse(fileContent);
            callBack(JSON.parse(fileContent));

        });

    }

    static deleteItem(description){
        //failis andmed lugeda, leida elementi, element eemaldada, ja massiivi uuendada
        fs.readFile(pathToRegularTaskFile, (error, fileContent) => {
            let tasks= [];
            if(!error){
                tasks = JSON.parse(fileContent);
            }

            for( let i=0; i< tasks.length; i++){
                if(tasks[i].description === description){
                    console.log(tasks[i].description, "deleted");
                    tasks.splice(i,1);
                    break;
                }
            }

            fs.writeFile(pathToRegularTaskFile, JSON.stringify(tasks), (error) => {
                console.log("Error while trying to delte", error);
            })
        });
    }
}