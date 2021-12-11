import { Component } from '@angular/core';
import {Todo} from "./models/todo.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todoList: Array<Todo> = [];
  title = 'Todo List';

  onAddTodo(newTodoText: string) {
    this.todoList.push(new Todo(this.getNewId(), newTodoText, false))
  }

  onUpdateTodo(todo: Todo){
    this.todoList.map((currentTodo) => {
      if(currentTodo.id === todo.id) {
        currentTodo.task = todo.task;
        return;
      }
    })
  }

  onDeleteTodo(todo: Todo){
    this.todoList = this.todoList.filter((currentTodo) => currentTodo.id !== todo.id)
  }

  onChangeTodoStatus(todo: Todo){
    this.todoList.map((currentTodo) => {
      if(currentTodo.id === todo.id){
        currentTodo.isComplete = !currentTodo.isComplete
        return;
      }
    })
  }

  private getNewId(){
    let lastItem = 0;
    if(this.todoList.length > 0){
      // @ts-ignore
      lastItem = this.todoList[this.todoList.length-1].id;
    }
    return ++lastItem;
  }
}
