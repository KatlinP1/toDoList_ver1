const fs = require('fs');
const path = require('path');
const pathToRegularWorkFile= path.join(path.dirname(process.mainModule.filename), 'data', 'workTask.json');


//let workList =[]; //list sisestatud andmete salvestamiseks

module.exports = class Task{
    constructor(wtask){
        this.description= wtask;
    }

    saveTask(){
        fs.readFile(pathToRegularWorkFile, (error, fileContent) => {
            let wtasks= [];

            if(!error){
                wtasks= JSON.parse(fileContent);
            } else {
                console.log(error);
            }

            wtasks.push(this);
            fs.writeFile(pathToRegularWorkFile, JSON.stringify(wtasks), (error) => {
                console.log('Error', error);
            }); 
        }) 
       //workList.push(this);
    }

    static fetchTasks(callBack){
        //return workList;
        fs.readFile(pathToRegularWorkFile, (error, fileContent) =>{
            if(error){
                //return [];
                callBack([]);
            }
            //return JSON.parse(fileContent);
            callBack(JSON.parse(fileContent));

        });    
    }


    static deleteWorkItem(description){
        fs.readFile(pathToRegularWorkFile, (error, fileContent) => {
            let wtasks= [];
            if(!error){
                wtasks = JSON.parse(fileContent);
            }

            for( let i=0; i< wtasks.length; i++){
                if(wtasks[i].description === description){
                    console.log(wtasks[i].description, "deleted");
                    wtasks.splice(i,1);
                    break;
                }
            }

            fs.writeFile(pathToRegularWorkFile, JSON.stringify(wtasks), (error) => {
                console.log("Error while trying to delete from work page", error);
            })
        });
    }
}