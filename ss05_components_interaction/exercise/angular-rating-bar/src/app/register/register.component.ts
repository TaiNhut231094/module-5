import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import {validatorAge, validatorConfirmPassword} from './customValidator.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  countryList = [{id: 1, name: 'Việt Nam'}, {id: 2, name: 'Canada'}, {id: 3, name: 'USA'}, {id: 4, name: 'Japan'}, {id: 5, name: 'Korea'}];
  register = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    confirmPassword: new FormControl('', [Validators.required, Validators.minLength(6)]),
    country: new FormControl('', [Validators.required]),
    dayOfBirthday: new FormControl('', [Validators.required, validatorAge]),
    gender: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required, Validators.pattern('^\\+84\\d{9,10}$')])
  }, validatorConfirmPassword);

  get email() {
    return this.register.get('email');
  }

  get password() {
    return this.register.get('password');
  }

  get confirmPassword() {
    return this.register.get('confirmPassword');
  }

  get country() {
    return this.register.get('country');
  }

  get dayOfBirthday() {
    return this.register.get('dayOfBirthday');
  }

  get gender() {
    return this.register.get('gender');
  }

  get phone() {
    return this.register.get('phone');
  }

  constructor() {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.register.value);
  }
}


