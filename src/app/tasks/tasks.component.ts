import { Component, OnInit } from '@angular/core';
import { TasksService } from '../services/tasks.service';

@Component({
  selector: 'tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks;

  constructor(private service: TasksService) {
   }

  ngOnInit(): void {
    this.service.getAllTasks().subscribe(
      (response:any[]) => { 
        this.tasks = response;
      }
    );
    console.log(this.tasks);
    
  }

}
