import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuizzListComponent } from './quizz-list/quizz-list.component';


const routes: Routes = [
  {path:'', component: QuizzListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
