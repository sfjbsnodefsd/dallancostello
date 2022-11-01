import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisteredUsersComponent } from './registered-users/registered-users.component';
import { UserFormComponent } from './user-form/user-form.component';

const routes: Routes = [{path:"", component:HomeComponent}, {path:"register", component:UserFormComponent}, {path:"registered", component:RegisteredUsersComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }