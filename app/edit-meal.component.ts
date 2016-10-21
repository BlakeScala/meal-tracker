import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'edit-meal',
  template: `
    <div *ngIf="childSelectedMeal">
      <div class="well mealForm">
        <h2>Edit Meal</h2>
        <div class = "row">
          <div class = "col-md-3">
            <div class="form-group">
              <label for="mealName">Food(s) You Ate</label>
              <input [(ngModel)]="childSelectedMeal.name" type ="text" class="form-control">
            </div>
          </div>
          <div class = "col-md-3">
            <div class="form-group">
              <label for="details">Details</label>
                <input [(ngModel)]="childSelectedMeal.details" type ="text" class="form-control">
            </div>
          </div>
          <div class = "col-md-3">
            <div class="form-group">
              <label for="mealType">Which meal was it?</label>
              <select [(ngModel)]="childSelectedMeal.mealType" class="form-control">
                <option value="Breakfast">Breakfast</option>
                <option value="Lunch">Lunch</option>
                <option value="Dinner">Dinner</option>
                <option value="Snack">Snack</option>
              </select>
            </div>
          </div>
          <div class = "col-md-3">
            <div class="form-group">
              <label for="calories">Number of Calories</label>
              <input [(ngModel)]="childSelectedMeal.calories" type ="number" class="form-control">
            </div>
          </div>
          <button class = "btn" (click)="
          doneEditing()
          ">Done Editing</button>
        </div>
      </div>
    </div>
  `
})

export class EditMealComponent {
  @Input() childSelectedMeal: Meal;
  @Input() childEditFormShow: boolean;
  @Output() editClickSender = new EventEmitter();

  doneEditing() {
    this.editClickSender.emit();
  }
}
