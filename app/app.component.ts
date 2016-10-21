import { Component, Input, Output } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <div class = "jumbotron">
      <h1>Meal Tracker</h1>
      <button (click)="showMealForm()">Add a Meal</button>
    </div>
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
  allMeals: Meal[] = [];

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
