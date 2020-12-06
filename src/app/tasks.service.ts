import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor() { }

  getTasks(){
    //http METHOD to fetch tasks
  //
  //
    return ["task1", "task2", "task3"];
  }

}
