import { Pipe, PipeTransform  } from '@angular/core';
import { Meal } from './meal.model';

@Pipe ({
  name: "calories",
  pure: false
})

export class CaloriesPipe implements PipeTransform {
  transform(input: Meal[], desiredCalories) {
    var output: Meal[] = [];
    if (desiredCalories === "All") {
      return input;
    } else if (desiredCalories === "Low") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].calories < 200) {
          output.push(input[i]);
        }
      }
    } else if (desiredCalories === "Medium") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].calories >= 200 && input[i].calories < 500) {
          output.push(input[i]);
        }
      }
    } else if (desiredCalories === "High") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].calories >= 500) {
          output.push(input[i]);
        }
      }
    }
    return output;
  }
}
