import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos:Todo[];
  localItem :string | null;

  constructor() { 

    this.localItem = localStorage.getItem("Todo")
    if(this.localItem===null){
      this.todos = []
    }
    else{
      this.todos = JSON.parse(this.localItem)
    }
    
  }

  ngOnInit(): void {
  }
  deleteTodo(todo:Todo){
    // console.log(todo)
    const index = this.todos.indexOf(todo)
    this.todos.splice(index,1)

    localStorage.setItem("Todo",JSON.stringify(this.todos))
  }
  AddTodo(todo:Todo){
    const index = this.todos.indexOf(todo)
    this.todos.push(todo)
     localStorage.setItem("Todo",JSON.stringify(this.todos))
  }
  ToggleCheckBox(todo:Todo){
    const index = this.todos.indexOf(todo)
    this.todos[index].active = !this.todos[index].active
    localStorage.setItem("Todo",JSON.stringify(this.todos))
  }

}
