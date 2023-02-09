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
  createCus(cus: any) : Observable<any>{  
    return this.http.post<addCustomer>(this.baseUrl  + '/cussave',cus,this.httpOptions).
    pipe(
      catchError(this.errorHandler)
    );  
  }
  getAllCus() {  
    return this.http.get<addCustomer[]>(this.baseUrl +"/cusgetAll");  
  }  
  deleteCus(id: any) {  
    return this.http.delete<addCustomer>(this.baseUrl + "/cusdelete/" + id); 

  }  
  getByIdCus(id: any) {  
    return this.http.get<addCustomer>(this.baseUrl + "/cusget/" + id);  

  } 

  updateCus(cus: addCustomer) {  
    return this.http.put(this.baseUrl + "/cusupdate", cus);  
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
