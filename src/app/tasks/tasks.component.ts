import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { NewTaskComponent } from './new-task/new-task.component';
import { type NewTaskData } from './task/task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent,NgFor,NewTaskComponent,NgIf],
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent {
  @Input() name?:string;
  @Input() userId!:string;
  isAddingTask=false;
  
  constructor(private tasksService:TasksService){
  

  }
  
  get selectedUserTasks(){
    return this.tasksService.getUserTasks(this.userId);
  }

 

  onStartAddTask(){
    this.isAddingTask=true;

  }

  onCloseAddTask(){
    this.isAddingTask=false;
  }

  

}
