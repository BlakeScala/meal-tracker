import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component ({
  selector: 'meal-filter',
  template: `
    <select (change) = "calorieSelect($event.target.value)" class="form-control">
      <option value="All">All</option>
      <option value="Low">Less Than 200 Calories</option>
      <option value="Medium">Between 200 and 500 Calories</option>
      <option value="High">More Than 500 Calories</option>
    </select>
  `
})

export class MealFilterComponent {
  @Output() calorieFilterSender = new EventEmitter();

  public selectedCalories = "All";
  calorieSelect(optionFromMenu) {
    this.selectedCalories = optionFromMenu;
    this.calorieFilterSender.emit(this.selectedCalories);
  }
}
