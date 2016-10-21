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
    <all-foods
      [childMealList] = "allMeals"
      (editClickSender) = "showEditForm"
    ></all-foods>
  </div>
  `
})

export class AppComponent {
  allMeals: Meal[] = [
    new Meal("Cheerios and Soy Milk", "Silk Brand", "Breakfast", 240)
  ];

  addMeal(newMealFromChild: Meal) {
    this.allMeals.push(newMealFromChild);
    console.log(this.allMeals);
  }
}
