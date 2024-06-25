import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ratings__average } from './average-rating/average-rating.component';
import { RatingListComponent } from './rating-list/rating-list.component';
import { ratings__item } from './rating/rating.component';

@NgModule({
  declarations: [
    AppComponent,
    ratings__average,
    RatingListComponent,
    ratings__item,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
