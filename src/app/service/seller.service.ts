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


  createSell(sell: addSeller) : Observable<any>{  
    return this.http.post<addSeller>(this.baseUrl  + '/save',sell,this.httpOptions).
    pipe(
      catchError(this.errorHandler)
    );  
  }
  getAllSell() {  
    return this.http.get<addSeller[]>(this.baseUrl +"/getAll");  
  }  
  deleteSell(id: number) {  
    return this.http.delete<addSeller>(this.baseUrl + "/delete/" + id); 

  }  
  getByIdSell(id: number) {  
    return this.http.get<addSeller>(this.baseUrl + "/get/" + id);  

  } 

  updateSell(sell: addSeller) {  
    return this.http.put(this.baseUrl + "/update", sell);  
  }  
  errorHandler(error:any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\Message: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
