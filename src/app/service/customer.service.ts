import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { addCustomer } from '../model/addCustomer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private baseUrl = 'http://localhost:8080/api';

  
  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  createCus(cus: addCustomer) : Observable<any>{  
    return this.http.post<addCustomer>(this.baseUrl  + '/save',cus,this.httpOptions).
    pipe(
      catchError(this.errorHandler)
    );  
  }
  getAllCus() {  
    return this.http.get<addCustomer[]>(this.baseUrl +"/getAll");  
  }  
  deleteCus(id: any) {  
    return this.http.delete<addCustomer>(this.baseUrl + "/delete/" + id); 

  }  
  getByIdCus(id: any) {  
    return this.http.get<addCustomer>(this.baseUrl + "/get/" + id);  

  } 

  updateCus(cus: addCustomer) {  
    return this.http.put(this.baseUrl + "/update", cus);  
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
