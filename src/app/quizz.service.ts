import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import{QuizzData} from './quizz-data';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuizzService {

  constructor(private httpClient : HttpClient) { }

  public getQuizzes() : Observable<QuizzData[]>{
    return this.httpClient.get<QuizzData[]>('http://localhost8080/getQuizzes');
  }
}
