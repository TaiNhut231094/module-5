import {AbstractControl, ValidationErrors} from '@angular/forms';

export function validatorAge(control: AbstractControl): ValidationErrors | null {
  const dateValue = new Date(control.value);
  const dateNow = Math.floor(new Date().getFullYear());
  const dayOfBirthday = Math.floor(dateValue.getFullYear());
  if ((dateNow - dayOfBirthday) < 18) {
    return {dayOfBirthday: true};
  }
  return null;
}

export function validatorConfirmPassword(control: AbstractControl): ValidationErrors | null {
  const confirmPassword = control.value.confirmPassword;
  const password = control.value.password;
  if (confirmPassword !== password) {
    return {confirmPassword: true};
  }
  return null;
}
