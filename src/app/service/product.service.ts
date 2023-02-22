import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { addProduct } from '../model/addProduct.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl = 'http://localhost:8080/api';  

    constructor(private http: HttpClient) { }
    httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }

    createProd(prod: any) : Observable<any>{  
      return this.http.post<addProduct>(this.baseUrl  + '/savePod',prod,this.httpOptions).
      pipe( catchError(this.errorHandler));  
    }

    getAllProd() {  
      return this.http.get<addProduct[]>(this.baseUrl +"/getAllPro");  
    } 

    deleteProd(id: any) {  
      return this.http.delete<addProduct>(this.baseUrl + "/deletePod/" + id); 

    }  

    getByIdProd(id: any) {  
      return this.http.get<addProduct>(this.baseUrl + "/getPod/" + id);  

    }

    updateProd(prod: addProduct) {  
      return this.http.put(this.baseUrl + "/updatePod", prod);  
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
