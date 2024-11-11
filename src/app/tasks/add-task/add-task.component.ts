import { Component, OnInit } from '@angular/core';
import { TasksService } from '../tasks.service';
import { FormsModule, Validators } from '@angular/forms'; // <-- Import FormsModule
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Task } from '../../Models/task';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule], // <-- Add FormsModule here
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent implements OnInit {
  taskForm!: FormGroup;

  title: string = '';
  description?: string = '';
  priority?: 'High' | 'Medium' | 'Low' = 'Medium';
  dueDate?: Date;

  constructor(private tasksService: TasksService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.dueDate = new Date();
    this.taskForm = this.fb.group({
      title: ['', [Validators.required]],
      description: [''],
      priority: [''],
      dueDate: ['']
    });
    
  }

  onSubmit(): void {
    // If form is invalid, don't submit
    if (this.taskForm.invalid) {
      return;
    }

    const task: Task = {
      id: Date.now(),  // Generate a random ID for simplicity
      title: this.title,
      description: this.description,
      priority: this.priority,
      status:'Incomplete',    //set status incomplete by default
      dueDate: this.dueDate,
    };

    this.tasksService.addTask(task);

    // Reset the form after submitting
    this.taskForm.reset();

    // Optional: If you want to reset the values like 'priority' manually after reset:
    this.taskForm.controls['priority'].setValue('Medium');
    this.taskForm.controls['dueDate'].setValue(this.dueDate);
  }
}
