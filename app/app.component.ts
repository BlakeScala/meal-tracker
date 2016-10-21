import { Component, Input, Output } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1>Meal Tracker</h1>
    <new-meal></new-meal>
  </div>
  `
})

export class AppComponent {

}
