import { Component, OnInit } from '@angular/core';

import { MealService, ComidaAleatoria} from '../services/api.service';


@Component({
  selector: 'app-comidas-aleatorias',
  templateUrl: './comidas-aleatorias.page.html',
  styleUrls: ['./comidas-aleatorias.page.scss'],
})
export class ComidasAleatoriasPage implements OnInit {
  categories: any;

  constructor(private ComidaAleatoria: ComidaAleatoria) {}

  ngOnInit() {
    this.ComidaAleatoria.getRandoms().subscribe((data) => {
      console.log(data)
      this.categories = data.categories;
      
    });
  }
}

