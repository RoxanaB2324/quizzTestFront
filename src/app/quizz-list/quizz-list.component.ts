import { Component, OnInit } from '@angular/core';
import {QuizzData} from '../quizz-data'
import { QuizzService } from '../quizz.service';

@Component({
  selector: 'app-quizz-list',
  templateUrl: './quizz-list.component.html',
  styleUrls: ['./quizz-list.component.css']
})
export class QuizzListComponent implements OnInit {

  quizzes : QuizzData [] = []


  constructor(private quizzService : QuizzService) { }

  ngOnInit(): void {
    this.quizzService.getQuizzes().subscribe(receivedQuizzes => {
      this.quizzes = receivedQuizzes;
    })
  }

}
