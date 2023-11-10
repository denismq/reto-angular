import { Injectable } from '@angular/core';
import { Task } from '../interfaces/task.interface';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  constructor() {}

  getTasks(): Task[] {
    return JSON.parse(localStorage.getItem('tasks') || '[]');
  }

  saveTask(task: Task[]) {
    localStorage.setItem('tasks', JSON.stringify(task));
  }
}
