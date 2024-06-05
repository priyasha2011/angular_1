import { Component, EventEmitter, Input, Output, inject,  } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type NewTaskData } from '../task/task.model';
import { TasksService } from '../tasks.service';
@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent 
 {
  @Input() userId!:string;
  @Output() close=new EventEmitter<void>();
  
  enteredTitle='';
  enteredSummary='';
  enteredDueDate='';

  private tasksService=inject(TasksService)


  onCancel(){
    this.close.emit();

  }

  onSubmit(){
    this.tasksService.addTask({
      title:this.enteredTitle,
      summary:this.enteredSummary,
      dueDate:this.enteredDueDate

    },this.userId );
    this.close.emit();


}
 }