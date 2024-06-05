import { Component,Input,  inject} from '@angular/core';
import { TasksService } from '../tasks.service';


interface Task{
  id:string;
  userId:string;
  title:string;
  summary:string;
  dueDate:string;
}

@Component({
  selector: 'app-task',
  standalone: true,
  
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent{
  @Input() task!:Task;
 
  private tasksService=inject(TasksService);

  onCompleteTask(){
    this.tasksService.removeTask(this.task.id);
  }
}

