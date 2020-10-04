import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuizzListComponent } from './quizz-list/quizz-list.component';
import { QuestionListComponent } from './question-list/question-list.component';

const routes: Routes = [
  {path:'quizz', component: QuizzListComponent},
  {path:'quest', component: QuestionListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
