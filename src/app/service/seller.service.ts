import {HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Seller } from '../model/Seller.model';


@Injectable({
  providedIn: 'root'
})
export class SellerService {
  
  private url = 'http://localhost:8080/api/';  
 

  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
 
 
  create(seller:Seller): Observable<any> {
  return this.httpClient.post(`${this.url}/save`, JSON.stringify(seller), this.httpOptions)
  .pipe(
    catchError(this.errorHandler)
    )
  }  

  getAll():Observable<any>{
    return this.httpClient.get(this.url + '/posts')
  
    .pipe(
      catchError(this.errorHandler)
    )
  }

  find(id:number): Observable<any> {
    return this.httpClient.get(this.url + '/posts/' + id)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  update(id:number, seller:Seller): Observable<any> {  
    return this.httpClient.put(this.url + '/update/' + id, JSON.stringify(seller), this.httpOptions)
     .pipe( 
      catchError(this.errorHandler)
    )
  }

  delete(id:number){
    return this.httpClient.delete(this.url + '/delete/' + id, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
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
