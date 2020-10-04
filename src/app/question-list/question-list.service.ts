import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuestionListService {

  constructor(private httpClient: HttpClient) { }

   // baseUrl = 'http://188.240.2.36:3030';
   baseUrl = 'http://localhost:8080/questions';
  
 
   getData() {
     return this.httpClient.get(this.baseUrl );
   }
 
   updateData( obj) {
     return this.httpClient.put(this.baseUrl , obj);
   }
 
   deleteData( id) {
     return this.httpClient.delete(this.baseUrl + `/${id}`);
   }
 
   addData(obj) {
     return this.httpClient.post(this.baseUrl , obj);
   }
}
