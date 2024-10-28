import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FashionComponent } from './fashion/fashion.component';
import { HttpClientModule } from '@angular/common/http';
import { FashiondetailComponent } from './fashiondetail/fashiondetail.component';
import { FormsModule } from '@angular/forms';
import { FashionpostComponent } from './fashionpost/fashionpost.component';
import { HomeComponent } from './home/home.component'; // Import FormsModule
@NgModule({
  declarations: [
    AppComponent,
    FashionComponent,
    FashiondetailComponent,
    FashionpostComponent,
    HomeComponent,
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
