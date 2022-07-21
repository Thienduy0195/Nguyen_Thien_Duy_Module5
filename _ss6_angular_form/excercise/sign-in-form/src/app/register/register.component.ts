import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomValidators} from './custom-validators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  rfInformation: FormGroup;
  countryArray = ['Viet Nam', 'USA', 'France', 'Chinese', 'Thailand'];

  constructor() {
  }

  ngOnInit(): void {
    this.rfInformation = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(18)]),
      confirmPassword: new FormControl('', Validators.required),
      country: new FormControl('', Validators.required),
      age: new FormControl('', [Validators.required, this.checkAge]),
      gender: new FormControl('', Validators.required),
      phone: new FormControl('', [Validators.required, Validators.pattern('^\\+84\\d{9,10}$')])
    }, [CustomValidators.mustMatch('password', 'confirmPassword')]);
  }

  sign(value: any) {
    console.log(value);
  }

  checkAge(a: AbstractControl): any {
    const year = a.value.substring(0, 4);
    const currentYear = new Date().getFullYear();
    return currentYear - year >= 18 ? null : {not18: true};
  }

}
