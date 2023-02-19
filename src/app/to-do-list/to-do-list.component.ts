import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IToDo } from './Interface/To-Do';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent {
displayMessage:boolean =false;
buttonText:string = "incomplete";
newTask:string ="";
searchTask:string="";

  toDoList : IToDo[]= [
    {task: "Get Dressed", completed: false},
    {task: "Make Coffee", completed: false},
    {task: "Go to Work", completed: false},
    {task: "Hit a New PR", completed: true},
    {task: "Crush all topics in Class", completed: false},
    {task: "Get ready for bed", completed: false}
  ];
  filteredTasks : IToDo[]= this.toDoList




  completeTask(index: number) {
    this.toDoList[index].completed = !this.toDoList[index].completed;
    this.filteredTasks = this.toDoList.filter((item) =>
    item.task.toLowerCase().includes(this.searchTask.toLowerCase())
  );

  }

  addTask(form:NgForm){
    this.toDoList.push({task: this.newTask, completed: false});
  }

  get checkCompleted(): boolean {
    return this.toDoList.every(item => item.completed);
  }

  removeTask(index: number): void {
    this.toDoList.splice(index, 1);
  }

  get filteredList(): IToDo[] {
    return this.toDoList.filter(item => item.task.toLowerCase().includes(this.searchTask.toLowerCase()));
  }

}
