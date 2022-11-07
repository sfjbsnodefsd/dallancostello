import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './Components/app-routing.module';
import { AppComponent } from './app.component';
import { UserFormComponent } from './Components/user-form/user-form.component';
import { HomeComponent } from './Components/home/home.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { RegisteredUsersComponent } from './Components/registered-users/registered-users.component';
import { InterpolationDemoComponent } from './Components/interpolation-demo/interpolation-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    UserFormComponent,
    HomeComponent,
    NavbarComponent,
    RegisteredUsersComponent,
    InterpolationDemoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
