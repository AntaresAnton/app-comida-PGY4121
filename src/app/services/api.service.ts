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


// Módulo para los paises

@Injectable({
  providedIn: 'root'
})
export class MealService3 {
  private apiUrl = 'https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian';

  constructor(private http: HttpClient) { }

  getPaises(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}



// desde el localhost
@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private apiUrl = 'http://localhost:8081/categorias';

  constructor(private http: HttpClient) { }

  getCategorias() {
    return this.http.get<any[]>(this.apiUrl);
  }
}
