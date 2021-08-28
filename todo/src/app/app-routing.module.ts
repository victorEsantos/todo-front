import { UpdateComponent } from './components/update/update.component';
import { CreateTodoComponent } from './components/create-todo/create-todo.component';
import { FinalizadosComponent } from './components/finalizados/finalizados.component';
import { ReadAllComponent } from './components/read-all/read-all.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ReadAllComponent,
  },
  {
    path: 'finalizados',
    component: FinalizadosComponent,
  },
  {
    path: 'create',
    component: CreateTodoComponent,
  },
  {
    path: 'update/:id',
    component: UpdateComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
