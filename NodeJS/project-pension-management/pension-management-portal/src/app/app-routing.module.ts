import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PensionersComponent } from './Components/pensioners/pensioners.component';
import { HomeComponent } from './Components/home/home.component';
import { AddPensionerComponent } from './Components/add-pensioner/add-pensioner.component';
import { ProcessPensionerComponent } from './Components/process-pensioner/process-pensioner.component';

const routes: Routes = [{path:"", component:HomeComponent},{path:"pensioners", component:PensionersComponent},{path:"addpensioner", component:AddPensionerComponent},{path:"process", component:ProcessPensionerComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
