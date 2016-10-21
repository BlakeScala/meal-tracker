import { Component, Input, Output } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <div class = "jumbotron">
      <h1>Meal Tracker</h1>
      <new-meal
        (newMealSender) = "addMeal($event)"
      ></new-meal>
    </div>
    <meal-display
      [childMealList] = "allMeals"
    ></meal-display>
  </div>
  `
})

export class AppComponent {
  allMeals: Meal[] = [];

  addMeal(newMealFromChild: Meal) {
    this.allMeals.push(newMealFromChild);
    console.log(this.allMeals);
  }
}
