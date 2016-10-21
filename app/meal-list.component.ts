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
              <div class = "mealDiv">
                <h4> {{currentMeal.name}}</h4>
                <p> {{currentMeal.calories}}</p>
              </div>
            </div>
          </div>
        </div>
        <div class = "col-md-3" id="lunchDiv">
          <h2>Lunch</h2>
          <div *ngFor ="let currentMeal of childMealList">
            <div *ngIf="currentMeal.mealType === 'Lunch'">
              <div class = "mealDiv">
                <h4> {{currentMeal.name}}</h4>
                <p> {{currentMeal.calories}}</p>
              </div>
            </div>
          </div>
        </div>
        <div class = "col-md-3" id="dinnerDiv">
          <h2>Dinner</h2>
          <div *ngFor ="let currentMeal of childMealList">
            <div *ngIf="currentMeal.mealType === 'Dinner'">
              <div class = "mealDiv">
                <h4> {{currentMeal.name}} : {{currentMeal.calories}} calories</h4>
              </div>
            </div>
          </div>
        </div>
        <div class = "col-md-3" id="snackDiv">
          <h2>Snack</h2>
          <div *ngFor ="let currentMeal of childMealList">
            <div *ngIf="currentMeal.mealType === 'Snack'">
              <div class = "mealDiv">
                <h4> {{currentMeal.name}}</h4>
                <p> {{currentMeal.calories}}</p>
              </div>
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
