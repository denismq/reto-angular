import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { TasksComponent } from './pages/tasks/tasks.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoginComponent, TasksComponent],
  imports: [CommonModule, FormsModule],
})
export class CoreModule {}
