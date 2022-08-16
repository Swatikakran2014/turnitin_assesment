import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Urls } from '../constants/endpints';
import { IAllDogs, IRandomDog } from '../model/dogs.model';
import { retry, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DogService {
  constructor(private http: HttpClient) {}
  getAllDogs() {
    return this.http
      .get<IAllDogs>(Urls.getAllDogs)
      .pipe(retry(1), catchError(this.handleError));
  }

  getRandomDog(url: string) {
    return this.http
      .get<IRandomDog>(url)
      .pipe(retry(1), catchError(this.handleError));
  }

  // Error handling
  handleError(error: any) {
    let errorMessage = 'Error in Api';
    window.alert(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
}
