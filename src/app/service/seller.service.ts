import {HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { addSeller } from '../model/addSeller.model';



@Injectable({
  providedIn: 'root'
})
export class SellerService {
  
  private baseUrl = 'http://localhost:8080/api';  
 

  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }


  create(cat: addSeller) : Observable<any>{  
    return this.http.post<addSeller>(this.baseUrl  + '/save',cat,this.httpOptions).
    pipe(
      catchError(this.errorHandler)
    );  
  }
  getAll() {  
    return this.http.get<addSeller[]>(this.baseUrl +"/getAll");  
  }  
  delete(id: number) {  
    return this.http.delete<addSeller>(this.baseUrl + "/delete/" + id); 

  }  
  getById(id: number) {  
    return this.http.get<addSeller>(this.baseUrl + "/get/" + id);  

  } 

  update(cat: addSeller) {  
    return this.http.put(this.baseUrl + "/update", cat);  
  }  
  errorHandler(error:any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
