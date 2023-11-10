import { Component, OnInit } from '@angular/core';
import { Task } from '../../interfaces/task.interface';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent implements OnInit {
  name: string = '';
  taskList: Task[] = [];

  constructor(private taskService: TasksService) {}

  ngOnInit() {
    this.getTask();
  }

  getTask() {
    this.taskList = this.taskService.getTasks();
  }

  addTask() {
    const task = {
      name: this.name,
      completed: false,
    };
    this.taskList.push(task);
    this.taskService.saveTask(this.taskList);
    this.getTask();
    this.name = '';
  }

  changeStatus() {
    this.taskService.saveTask(this.taskList);
  }

  deleteTask(index: number) {
    this.taskList.splice(index, 1);
    this.taskService.saveTask(this.taskList);
  }
}
