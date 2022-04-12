import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Vld} from './vld';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registerFrom: FormGroup;
  vld = new Vld();

  constructor() { }

  ngOnInit(): void {
    this.registerFrom = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      pwGroup: new FormGroup({
        password: new FormControl('', [Validators.required, Validators.minLength(6)]),
        confirmPassword: new FormControl('', [Validators.required, Validators.minLength(6)]),
      }, this.vld.checkPass),
      country: new FormControl('', Validators.required),
      age: new FormControl('', [Validators.required, this.vld.check18]),
      gender: new FormControl('', Validators.required),
      phone: new FormControl('', [Validators.required, Validators.pattern('^\\+84\\d{9,10}$')])
    });
  }

}
