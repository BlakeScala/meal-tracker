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
        <div *ngFor="let currentMeal of childMealList">
          <div class="col-md-6">
            <p class="listedMeal">{{currentMeal.name}}</p>
            <button (click) = "editButtonClicked">
          </div>
          <div class="col-md-6">
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

  editButtonClicked() {
    this.clickSender.emit()
  }
}
