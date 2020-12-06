import { Component, OnInit } from '@angular/core';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks;
  status;
  id;
  constructor(private service: TasksService) {
    this.tasks = this.service.getTasks();
   }

  ngOnInit(): void {
    //
    //code to fetch all tasks from the backend
    //
    //
    
  }

}
