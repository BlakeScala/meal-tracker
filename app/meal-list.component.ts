import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-display',
  template: `
    <div class="dailymeals">
      <div class = "row">
        <div class = "col-md-3" id= "breakDiv">
          <h2>Breakfast</h2>
          <ul>
            <div *ngFor ="let currentMeal of childMealList">
              <div *ngIf="currentMeal.mealType === 'Breakfast'">
                <div class = "mealDiv">
                  <li>{{currentMeal.name}} : {{currentMeal.calories}} calories</li>
                  <p>Details: {{currentMeal.details}}</p>
                </div>
              </div>
            </div>
          </ul>
        </div>
        <div class = "col-md-3" id="lunchDiv">
          <h2>Lunch</h2>
          <ul>
            <div *ngFor ="let currentMeal of childMealList">
              <div *ngIf="currentMeal.mealType === 'Lunch'">
                <div class = "mealDiv">
                  <li>{{currentMeal.name}} : {{currentMeal.calories}} calories</li>
                  <p>Details: {{currentMeal.details}}</p>
                </div>
              </div>
            </div>
          </ul>
        </div>
        <div class = "col-md-3" id="dinnerDiv">
          <h2>Dinner</h2>
          <ul>
            <div *ngFor ="let currentMeal of childMealList">
              <div *ngIf="currentMeal.mealType === 'Dinner'">
                <div class = "mealDiv">
                  <li>{{currentMeal.name}} : {{currentMeal.calories}} calories</li>
                  <p>Details: {{currentMeal.details}}</p>
                </div>
              </div>
            </div>
          </ul>
        </div>
        <div class = "col-md-3" id="snackDiv">
          <h2>Snack</h2>
          <ul>
            <div *ngFor ="let currentMeal of childMealList">
              <div *ngIf="currentMeal.mealType === 'Snack'">
                <div class = "mealDiv">
                  <li>{{currentMeal.name}} : {{currentMeal.calories}} calories</li>
                  <p>Details: {{currentMeal.details}}</p>
                </div>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </div>
  `
})

export class MealListComponent {
  @Input() childMealList: Meal[];
}
