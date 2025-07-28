import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NewTaskService, Task } from '../../services/new-task.service';
import { title } from 'process';
import { error } from 'console';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.scss'
})
export class NewTaskComponent {

  taskForm: FormGroup;

  constructor(private fb: FormBuilder, private newTaskService: NewTaskService) {
    this.taskForm = this.fb.group({
      title: ['', Validators.required],
      description: [''],
      completed: [false]
    });
  }

  onSubmit(): void {
    const task: Task = this.taskForm.value;
    this.newTaskService.addTask(task).subscribe({
      next: (response) => {
        console.log('Add task: ', response);
      },

      error: (err) => {
        console.log(err);
      }
    })
  }

}
