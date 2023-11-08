import { Component, OnInit } from '@angular/core';
import { MealService3 } from '../services/api.service';

@Component({
  selector: 'app-comidas-por-pais',
  templateUrl: './comidas-por-pais.page.html',
  styleUrls: ['./comidas-por-pais.page.scss'],
})

export class ComidasPorPaisPage implements OnInit {
  pais: any;

  constructor(private mealService: MealService3) {}

  ngOnInit() {
    this.mealService.getPaises().subscribe((data) => {
      console.log(data)
      this.pais = data.pais;
      
    });
  }
}


