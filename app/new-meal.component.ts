import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'new-meal',
  template: `
    <div class="well" id="mealForm">
      <h2>Add a Meal</h2>
      <div class="form-group">
        <label for="mealName">Foods You Ate</label>
        <input #mealName type="text" class="form-control">
      </div>
      <div class="form-group">
        <label for="details">Details</label>
        <input #details type="text" class="form-control">
      </div>
      <div class="form-group">
        <label for="mealType">Which meal did you eat this for?</label>
        <select #mealType class="form-control">
          <option value="Breakfast">Breakfast</option>
          <option value="Lunch">Lunch</option>
          <option value="Dinner">Dinner</option>
          <option value="Snack">Snack</option>
        </select>
      </div>
      <div class="form-group">
        <label for="calories">Number of Calories</label>
        <input #calories type="number" class="form-control">
      </div>
      <button class = "btn" (click)="
      addClicked(mealName.value, details.value, mealType.value, calories.value);
      ">Add</button>
    </div>
  `
})

export class NewMealComponent {
  @Output() newMealSender = new EventEmitter();
  @Input() show: boolean;

  addClicked(mealName: string, details: string, mealType: string, calories: string) {
    if (mealName == "" || details == "" || calories == null) {
      alert("Please fill out the entire form.");
    } else {
      var numCals: number = parseInt(calories);
      var newMealToAdd: Meal = new Meal(mealName, details, mealType, numCals);
      console.log(newMealToAdd.mealType);
      this.newMealSender.emit(newMealToAdd);
    }

  }
}
