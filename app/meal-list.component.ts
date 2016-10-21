import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-display',
  template: `
    <div class="dailymeals">
      <div class = "row">
        <div class = "col-md-3" id= "breakDiv">
          <h2>Breakfast</h2>
          <div *ngFor ="let currentMeal of childMealList">
            <div *ngIf="currentMeal.mealType === 'Breakfast'">
              <h3> {{currentMeal.name}}</h3>
            </div>
          </div>
        </div>
        <div class = "col-md-3" id="lunchDiv">
          <h2>Lunch</h2>
          <div *ngFor ="let currentMeal of childMealList">
            <div *ngIf="currentMeal.mealType === 'Lunch'">
              <h3> {{currentMeal.name}}</h3>
            </div>
          </div>
        </div>
        <div class = "col-md-3" id="dinnerDiv">
          <h2>Dinner</h2>
          <div *ngFor ="let currentMeal of childMealList">
            <div *ngIf="currentMeal.mealType === 'Dinner'">
              <h3> {{currentMeal.name}}</h3>
            </div>
          </div>
        </div>
        <div class = "col-md-3" id="snackDiv">
          <h2>Snack</h2>
          <div *ngFor ="let currentMeal of childMealList">
            <div *ngIf="currentMeal.mealType === 'Snack'">
              <h3> {{currentMeal.name}}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})

export class MealListComponent {
  @Input() childMealList: Meal[];
}
