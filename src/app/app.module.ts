import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component'
import { RecipeService } from "./Recipes/recipe.service"
import { ListRecipiesComponent } from './Recipes/list-recipies/list-recipies.component';
import { CreateRecipiesComponent } from './Recipes/create-recipies/create-recipies.component';

@NgModule({
  declarations: [
    AppComponent,
    ListRecipiesComponent,
    CreateRecipiesComponent,

  ],
  imports: [
    BrowserModule,

  ],
  providers: [
    RecipeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
