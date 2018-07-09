import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validator, FormBuilder, Validators} from '@angular/forms';
import { UsersService } from '../../../shared/users.service';
import { Details } from '../../../shared/users';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
    rForm: FormGroup;
    name: string;
    surname: string;
    street: string;
    phone: number;
    number: number;
    city: string;
    date: string;
    aDetails: Details;
  constructor(public service: UsersService) { }

  ngOnInit() {
    this.rForm = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'surname': new FormControl(null, Validators.required),
      'phone': new FormControl(null, Validators.required),
      'street': new FormControl(null, Validators.required),
      'city': new FormControl(null, Validators.required),
      'number': new FormControl(null, Validators.required),
      'date': new FormControl(null, Validators.required)
    });
  }
  onregister() {
    this.name = this.rForm.get('name').value;
    this.date = this.rForm.get('date').value.getDate() + '-' + this.rForm.get('date').value.getMonth() + '-' +
    this.rForm.get('date').value.getFullYear();
    this.surname = this.rForm.get('surname').value;
    this.phone = this.rForm.get('phone').value;
    this.street = this.rForm.get('street').value;
    this.city = this.rForm.get('city').value;
    this.number = this.rForm.get('number').value;
    console.log(this.date, this.name);
    this.aDetails = {
      'name': this.name,
      'surname': this.surname,
      'birthDate': this.date,
      'phone': this.phone,
      'city': this.city,
      'street': this.street,
      'number': this.number
    };
    this.service.postDetails(this.aDetails).subscribe();
    this.rForm.reset();
  }
  clear() {
    this.rForm.reset();
  }
}
