import { Component, OnInit } from '@angular/core';
import {QuizzData} from '../quizz-data'

@Component({
  selector: 'app-quizz-list',
  templateUrl: './quizz-list.component.html',
  styleUrls: ['./quizz-list.component.css']
})
export class QuizzListComponent implements OnInit {

  quizzes : QuizzData [] = [
    {id:1, name:"Test1", description : "Mock"},
    {id:2, name:"Test2", description:"Mock2"}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
