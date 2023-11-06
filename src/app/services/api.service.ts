import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// módulo para obtener datos de categorías
@Injectable({
  providedIn: 'root'
})
export class MealService {
  private apiUrl = 'https://www.themealdb.com/api/json/v1/1/categories.php';

  constructor(private http: HttpClient) { }

  getCategories(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}

// módulo para obtener información de la api randoms
@Injectable({
  providedIn: 'root'
})
export class MealService2 {
  private apiUrl = 'https://www.themealdb.com/api/json/v1/1/random.php';

  constructor(private http: HttpClient) {}

  getRandomMeal(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
