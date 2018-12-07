// ************************************************************ Task Planner *************************************************************************
// Developed By          : Subhashish Ghosh
// Date                  : 7th Dec 2018
// Version               : TaskPlanner v_1.0_Release
// ********************************************* Copy Righted Material. All Rights Reserved ***********************************************************

import { Component, OnInit } from '@angular/core';
import { Task } from '../Task';

@Component({
  selector: 'app-task-planner-main',
  templateUrl: './task-planner-main.component.html',
  styleUrls: ['./task-planner-main.component.css']
})
export class TaskPlannerMainComponent implements OnInit {

   panelHeaderText = "All Tasks";
   TaskList:Task[]=[];
   TaskList=[{taskName:"Water The Plant",taskNumber:1,taskStatus:"Open",taskPriority:"Normal"},
             {taskName:"Book Holiday Tickets",taskNumber:2,taskStatus:"Open",taskPriority:"Normal"},
             {taskName:"Morning Walk",taskNumber:3,taskStatus:"Open",taskPriority:"Normal"},
             {taskName:"Book office Cab",taskNumber:4,taskStatus:"Open",taskPriority:"Normal"}
 ]
   newTaskName=""
   newTaskStatus="Open";
   newTaskNumber=5;
   newTaskPriority="Normal";

  addTask():void{

    if (this.newTaskName)
    {
      var tempTask=new Task();
      tempTask.taskName=this.newTaskName;
      tempTask.taskNumber=this.newTaskNumber;
      tempTask.taskStatus=this.newTaskStatus;
      tempTask.taskPriority=this.newTaskPriority;

      this.TaskList.push(tempTask);
      this.newTaskNumber=this.newTaskNumber+1;
      console.log(this.newTaskName + "  Added Successfully  .....")
      this.newTaskName="";
    }

  }


  markAsComplete(varAddedTask):void
  {
    if(varAddedTask.taskStatus=="Open")
    {
    varAddedTask.taskStatus="Completed";
    console.log("Item Marked As Completed");
    }
    else
    {
      varAddedTask.taskStatus="Open";
      console.log("Item Marked As Open");
    }

  }


  removeTasks(varRemovedTask):void
  {
    if (varRemovedTask.taskNumber)
    {
          for(var i=0;i< this.TaskList.length;i++)
          {
            if(this.TaskList[i].taskNumber == varRemovedTask.taskNumber)
            {
              this.TaskList.splice(i,1);
            }
          }
    }

    console.log("Removed Clicked Item");
  }

  constructor() { }

  ngOnInit() {
  }

}
