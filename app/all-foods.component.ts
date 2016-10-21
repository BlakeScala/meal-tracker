import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'all-foods',
  template: `
    <div id="allMeals">
      <h1>Today's Intake</h1>
      <div *ngIf="childMealList.length == 0">
        <h2>Add some foods you ate to see today's intake.</h2>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div *ngFor="let currentMeal of childMealList | calories: calorieFilter">
            <p class="listedMeal">
              <button (click) = "editButtonClicked(currentMeal)">Edit</button>
              {{currentMeal.name}}
            </p>
          </div>
        </div>
        <div class="col-md-6">
          <div *ngFor="let currentMeal of childMealList | calories: calorieFilter">
            <p class="listedMeal">{{currentMeal.calories}} Calories</p>
          </div>
        </div>
      </div>
    </div>
  `
})

export class AllFoodsComponent {
  @Input() childMealList: Meal[];
  @Output() editClickSender = new EventEmitter();
  @Input() calorieFilter: string;
  editButtonClicked(mealToEdit: Meal) {
    this.editClickSender.emit(mealToEdit);
  }
}
