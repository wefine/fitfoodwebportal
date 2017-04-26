import {AbstractControl} from '@angular/forms';

export class PhoneValidator {

  public static validate(c:AbstractControl) {
    let PHONE_REGEXP = /^(\+91-|\+91|0)?\d{10}$/;

    return PHONE_REGEXP.test(c.value) ? null : {
      validatePhone: {
        valid: false
      }
    };
  }
}
