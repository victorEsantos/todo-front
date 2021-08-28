import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from 'src/app/models/todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'],
})
export class UpdateComponent implements OnInit {
  todo: Todo = {
    title: '',
    description: '',
    finishedDate: new Date(),
    done: false,
  };
  constructor(
    private router: Router,
    private service: TodoService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.todo.id = this.route.snapshot.paramMap.get('id')!;
    this.findById();
  }

  findById(): void {
    this.service.findById(this.todo.id).subscribe((resposta) => {
      console.log(">>>>>"+resposta.finishedDate);
      this.todo = resposta;
      this.formataDate();
    });
  }

  update(): void {
    this.formataDate();
    this.service.update(this.todo).subscribe(
      (resposta) => {
        this.service.message('Informações atualizada com sucesso!');
        this.router.navigate(['']);
      },
      (err) => {
        this.service.message('Falha Ao Atualizar!');
      }
    );
  }

  formataDate(): void {
    let data = new Date(this.todo.finishedDate);
    this.todo.finishedDate = `${data.getDate()}/${
      data.getMonth() + 1
    }/${data.getFullYear()}`;
  }
}
