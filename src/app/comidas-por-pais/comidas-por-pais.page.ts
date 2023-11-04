import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comidas-por-pais',
  templateUrl: './comidas-por-pais.page.html',
  styleUrls: ['./comidas-por-pais.page.scss'],
  template: `
    <ion-header>
      <ion-toolbar>
        <ion-title>Canadian Cuisine</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-list>
        <ion-item *ngFor="let dish of dishes">
          <ion-label>{{ dish.strMeal }}</ion-label>
        </ion-item>
      </ion-list>
    </ion-content>
  `
})
export class ComidasPorPaisPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
