import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component'
import { ListRecipiesComponent } from './Recipes/list-recipies/list-recipies.component';
import { CreateRecipiesComponent } from './Recipes/create-recipies/create-recipies.component';

@NgModule({
  declarations: [
    AppComponent,
    ListRecipiesComponent,
    CreateRecipiesComponent
  ],
  imports: [
    BrowserModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
