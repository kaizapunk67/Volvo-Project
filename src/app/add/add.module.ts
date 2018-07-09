import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddRoutingModule } from './add-routing.module';
import { AddUserComponent } from './components/add-user/add-user.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule, MatDatepickerModule, MatNativeDateModule} from '@angular/material';
@NgModule({
  imports: [
    CommonModule,
    AddRoutingModule, FormsModule, ReactiveFormsModule,
    MatFormFieldModule, MatInputModule, MatDatepickerModule, MatNativeDateModule
  ],
  declarations: [AddUserComponent]
})
export class AddModule { }
