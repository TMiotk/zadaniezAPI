import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError} from 'rxjs';
import { retry, catchError, tap } from 'rxjs/operators';
import {  HttpErrorResponse } from '@angular/common/http';
import { HttpParams} from '@angular/common/http';
import {Product} from './product';

@Injectable({
  providedIn: 'root'
})
export class DataService {\

  API_KEY = '6e0fa28fd6mshc3df24ec4f9b191p173de2jsn76213eb8d84c';

constructor(private httpClient: HttpClient) { }


  public getNews(){
    

const options = { params: new HttpParams({fromString:"_page=1&_limit=20"})};

    return this.httpClient.get<Product[]>(`https://iata-and-icao-codes.p.rapidapi.com/airlines?rapidapi-key=${this.API_KEY}`, options).pipe(retry(6), catchError(this.handleError));;
  
  
  
  }


  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

}
