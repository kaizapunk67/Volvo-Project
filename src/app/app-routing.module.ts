import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, ROUTES } from '@angular/router';
import { AppComponent } from './app.component';
import { AddModule } from './add/add.module';
import { UsersModule } from './users/users.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: './users/users.module#UsersModule'
  },
  {
    path: 'add',
    loadChildren: './add/add.module#AddModule'
  }
];

@NgModule({
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
