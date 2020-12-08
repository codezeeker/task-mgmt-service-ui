import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  //private URL_GET_ALL = 'http://localhost:5000/items/all';
  private URL_GET_ALL = 'https://jsonplaceholder.typicode.com/todos';
  constructor(private httpClient: HttpClient) { }

  getAllTasks(){
    //http METHOD to fetch tasks
  //
  //
    return this.httpClient.get(this.URL_GET_ALL);
  }

}
