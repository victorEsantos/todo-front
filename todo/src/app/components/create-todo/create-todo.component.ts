import { Todo } from 'src/app/models/todo';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.css'],
})
export class CreateTodoComponent implements OnInit {
  todo: Todo = {
    title: '',
    description: '',
    finishedDate: new Date(),
    done: false,
  };
  constructor(private router: Router, private service: TodoService) {}

  ngOnInit(): void {}

  create(): void {
    this.formataDate()
    this.service.create(this.todo).subscribe((resposta)=>{
      this.service.message('Todo criado com sucesso!');
      this.router.navigate(['']);
    }, err => {
      this.service.message('Falha na criação do Todo');
    }
    )
  }

  formataDate(): void {
    let data = new Date(this.todo.finishedDate);
    this.todo.finishedDate = `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`
  }

  voltar(): void {
    this.router.navigate(['']);
  }
}
