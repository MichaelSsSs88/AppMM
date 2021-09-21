import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { HomeComponent } from './home/home.component';
import {MatCardModule } from '@angular/material/card';
import { PersonalcareComponent } from './personalcare/personalcare.component';
import {MatPaginatorModule} from '@angular/material/paginator';
//import {MatTableModule } from '@angular/material/table';
//import { MatTableDataSource } from '@angular/material/table';
//import {MatPaginator} from '@angular/material/paginator';




@NgModule({
  declarations: [AppComponent, HomeComponent, PersonalcareComponent],
  imports:[
    BrowserModule,
    MatPaginatorModule,
    //MatPaginator,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
