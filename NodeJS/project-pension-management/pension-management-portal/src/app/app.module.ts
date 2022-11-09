import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { PensionersComponent } from './Components/pensioners/pensioners.component';
import { HomeComponent } from './Components/home/home.component';
import { AddPensionerComponent } from './Components/add-pensioner/add-pensioner.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PensionersComponent,
    HomeComponent,
    AddPensionerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
