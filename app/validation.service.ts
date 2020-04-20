import { Injectable } from "@angular/core";

@Injectable()
export class ValidationService {
  static getValidatorErrorMessage(validatorName: string, validatorValue?: any) {
    let config = {
      required: "Required",
      invalidCreditCard: "Is invalid credit card number",
      invalidEmailAddress: "Invalid email address",
      invalidPassword:
        "Invalid password. Password must be at least 6 characters long, and contain a number.",
      minlength: `Minimum length ${validatorValue.requiredLength}`
    };

    return config[validatorName];
  }
}
