import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  title:string;
  desc:string;
  active:boolean
  isValue:boolean
  @Output() todoAdd:EventEmitter<Todo> = new EventEmitter()
  constructor() { 

  }
  ngOnInit(): void {
  }

  ValueInput(val:string){
    // console.log(val)
    this.isValue=true
  }

  onSubmit(){
    if(this.isValue) {
        var todo:Todo = {
        title : this.title,
        desc : this.desc,
        active : this.active
      }
      this.todoAdd.emit(todo)
    }
    

    
  }

}
