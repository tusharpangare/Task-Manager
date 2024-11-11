import { Component, OnInit } from '@angular/core';
import { Task } from '../Models/task';
import { TasksService } from './tasks.service';
import { AddTaskComponent } from './add-task/add-task.component';
import { CommonModule, DatePipe } from '@angular/common';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [AddTaskComponent, DatePipe, CommonModule],  
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css', 
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];
  constructor(private tasksService: TasksService){

  }

  ngOnInit(): void {
    this.tasks= this.tasksService.tasks;
  }

  getPriorityClass(priority: string): string {
    switch (priority) {
      case 'High':
        return 'high';
      case 'Medium':
        return 'medium';
      case 'Low':
        return 'low';
      default:
        return '';
    }
  }

  toggleStatus(task: Task): void {
    task.status = task.status === 'Complete' ? 'Incomplete' : 'Complete';
  }

  onDelete(task: Task){
    this.tasksService.deleteTask(task);
  }

}
