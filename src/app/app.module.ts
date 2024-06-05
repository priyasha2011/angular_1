import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { TasksComponent } from './tasks/tasks.component';
import { TaskComponent } from './tasks/task/task.component';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { NewTaskComponent } from './tasks/new-task/new-task.component';
import { CardComponent } from './shared/card/card.component';

@NgModule({
    declarations: [
        
    
    
  
    
  ],
    imports: [
        BrowserModule,
        CommonModule
    ],
    providers: [],
    bootstrap: []
})
export class AppModule { }