import { Component, OnInit, Input } from "@angular/core";
import { FormGroup, ValidationErrors, AbstractControl } from "@angular/forms";

export interface AllValidationErrors {
  control_name: string;
  error_name: string;
  error_value: any;
}

export interface FormGroupControls {
  [key: string]: AbstractControl;
}

export function getFormValidationErrors(
  controls: FormGroupControls
): AllValidationErrors[] {
  let errors: AllValidationErrors[] = [];
  Object.keys(controls).forEach(key => {
    const control = controls[key];
    if (control instanceof FormGroup) {
      errors = errors.concat(getFormValidationErrors(control.controls));
    }
    const controlErrors: ValidationErrors = controls[key].errors;
    if (controlErrors !== null) {
      Object.keys(controlErrors).forEach(keyError => {
        errors.push({
          control_name: key,
          error_name: keyError,
          error_value: controlErrors[keyError]
        });
      });
    }
  });
  return errors;
}

@Component({
  selector: "app-errors-all",
  templateUrl: "./errors-all.component.html",
  styleUrls: ["./errors-all.component.css"]
})
export class ErrorsAllComponent implements OnInit {
  @Input() form: FormGroup;
  errors;

  constructor() {}

  ngOnInit() {
    this.form.statusChanges.subscribe(val => {
      this.errors = getFormValidationErrors(this.form.controls);
      console.log("errors", this.errors);
    });
  }
}
