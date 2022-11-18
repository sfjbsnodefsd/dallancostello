import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { PensionersComponent } from './Components/pensioners/pensioners.component';
import { HomeComponent } from './Components/home/home.component';
import { AddPensionerComponent } from './Components/add-pensioner/add-pensioner.component';
import { ProcessPensionerComponent } from './Components/process-pensioner/process-pensioner.component';
import { LoginComponent } from './Components/login/login.component';
import { JwtInterceptor } from './Interceptors/jwt.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PensionersComponent,
    HomeComponent,
    AddPensionerComponent,
    ProcessPensionerComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
