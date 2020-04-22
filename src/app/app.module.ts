import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CreateRecipiesComponent } from './Recipes/create-recipies/create-recipies.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateRecipiesComponent
  ],
  imports: [
    BrowserModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
