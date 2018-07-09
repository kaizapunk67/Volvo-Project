import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users-routing.module';
import { ListComponent } from './components/list/list.component';
import {MatTableModule} from '@angular/material/table';
import { EditorComponent } from './components/editor/editor.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule, MatDatepickerModule, MatNativeDateModule} from '@angular/material';


@NgModule({
  imports: [
    CommonModule,
    UsersRoutingModule,
    MatTableModule, MatInputModule,
    MatDialogModule, MatDatepickerModule, MatNativeDateModule,
    MatAutocompleteModule, MatFormFieldModule,
    FormsModule, ReactiveFormsModule
    ],
  declarations: [ListComponent, EditorComponent],
  entryComponents: [EditorComponent]
})
export class UsersModule { }
