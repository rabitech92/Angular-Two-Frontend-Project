import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { addCustomer } from '../model/addCustomer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private baseUrl = 'http://localhost:8080/apa';

  
  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  create(cat: addCustomer) : Observable<any>{  
    return this.http.post<addCustomer>(this.baseUrl  + '/save',cat,this.httpOptions).
    pipe(
      catchError(this.errorHandler)
    );  
  }
  getAll() {  
    return this.http.get<addCustomer[]>(this.baseUrl +"/getAll");  
  }  
  delete(id: any) {  
    return this.http.delete<addCustomer>(this.baseUrl + "/delete/" + id); 

  }  
  getById(id: any) {  
    return this.http.get<addCustomer>(this.baseUrl + "/get/" + id);  

  } 

  update(cat: addCustomer) {  
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
