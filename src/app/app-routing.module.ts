import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {PersonalcareComponent} from './personalcare/personalcare.component'

const routes: Routes = [
  {path: 'home', component:HomeComponent},
  {path: 'personalcare', component:PersonalcareComponent},
  {path: '', redirectTo:'/home', pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }