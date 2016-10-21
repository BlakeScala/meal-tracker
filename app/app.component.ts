import { Component, Input, Output } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1>Meal Tracker</h1>
    <button (click)="showMealForm()">Add a Meal</button>
    <new-meal
      [show] = "showNewMealForm"
      (newMealSender) = "addMeal($event)"
    ></new-meal>
    <meal-display
      [childMealList] = "allMeals"
    ></meal-display>
  </div>
  `
})

export class AppComponent {
  allMeals: Meal[] = [
    new Meal("Tofu", "good", "Breakfast", 200)
  ];

  showNewMealForm: boolean = false;

  showMealForm() {
    this.showNewMealForm = true;
  }

  addMeal(newMealFromChild: Meal) {
    this.allMeals.push(newMealFromChild);
    this.showNewMealForm = false;
    console.log(this.allMeals);
  }
}
