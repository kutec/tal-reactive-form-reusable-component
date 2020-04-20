import { Component, OnInit, Input } from '@angular/core';
import { ValidationService } from '../validation.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-validations',
  templateUrl: './validations.component.html',
  styleUrls: ['./validations.component.css']
})
export class ValidationsComponent {
  @Input() controller: FormControl;

  constructor() { }

  get errorMessage() {
    for (let propertyName in this.controller.errors) {
      if (
        this.controller.errors.hasOwnProperty(propertyName) &&
        this.controller.touched
      ) {
        return ValidationService.getValidatorErrorMessage(
          propertyName,
          this.controller.errors[propertyName]
        );
      }
    }
    return null;
  }

}