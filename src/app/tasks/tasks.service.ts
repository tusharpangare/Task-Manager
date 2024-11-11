import { Injectable } from '@angular/core';
import { Task } from '../Models/task';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  tasks: Task[] = [];
  constructor() { }

  addTask(task: Task){
    this.tasks.push(task);
  }

  deleteTask(task: Task) {
    const index: number = this.tasks.indexOf(task);
    if (index !== -1) {
        this.tasks.splice(index, 1);
    }        
}
}
