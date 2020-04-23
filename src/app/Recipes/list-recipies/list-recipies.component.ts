import { Component, OnInit } from '@angular/core';
import { Recipe } from "../../models/recipie.model"
import { RecipeService } from "../recipe.service"

@Component({
  selector: 'app-list-recipies',
  templateUrl: './list-recipies.component.html',
  styleUrls: ['./list-recipies.component.scss']
})
export class ListRecipiesComponent implements OnInit {
  recipe: Recipe
  recipes: Recipe[]
  id: number;
  name: string;
  photo: string;
  description: string


  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipe();
  }

}
