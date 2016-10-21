import { Component, Input, Output } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <div class = "jumbotron">
      <h1>Meal Tracker</h1>
      <new-meal
        [childNewFormShow] = "newFormShow"
        (newMealSender) = "addMeal($event)"
      ></new-meal>
      <edit-meal
        [childEditFormShow] = "editFormShow"
        [childSelectedMeal] = "selectedMeal"
        (editClickSender) = "editDone()"
      ></edit-meal>
    </div>
    <meal-filter
      (calorieFilterSender) = "selectCalories($event)"
    ></meal-filter>
    <all-foods
      [childMealList] = "allMeals"
      (editClickSender) = "showEditForm($event)"
      [calorieFilter] = "selectedCalories"
    ></all-foods>
    <br>
    <meal-display
      [childMealList] = "allMeals"
    ></meal-display>
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

  editFormShow: boolean = false;
  newFormShow: boolean = true;
  selectedMeal: Meal = null;
  selectedCalories: string = "All";

  showEditForm(clickedMeal: Meal) {
    this.selectedMeal = clickedMeal;
    this.editFormShow = true;
    this.newFormShow = false;
  }

  editDone() {
    this.selectedMeal = null;
    this.editFormShow = false;
    this.newFormShow = true;
  }

  selectCalories(childSelectedCalories: string) {
    this.selectedCalories = childSelectedCalories;
  }
}
