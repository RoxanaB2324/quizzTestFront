import { Component, OnInit } from '@angular/core';
// import {QuestionListService} from './question-list.service';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})


export class QuestionListComponent implements OnInit {

  constructor() {  }

  questionsToDisplay = [];

  ngOnInit(): void {
    
  }
loadData(){
  // this.service.getData().subscribe((items: Array<any>)=>{
    //   console.log ("Question are:  ", items);
    //   this.questionsToDisplay = items;
    // })
}


}
