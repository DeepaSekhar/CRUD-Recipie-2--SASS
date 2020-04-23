import { Component, OnInit } from '@angular/core';
import { Recipe } from "../../models/recipie.model"
import { RecipeService } from "../recipe.service"

@Component({
  selector: 'app-create-recipies',
  templateUrl: './create-recipies.component.html',
  styleUrls: ['./create-recipies.component.scss']
})

export class CreateRecipiesComponent implements OnInit {
  recipe: Recipe
  recipes: Recipe[]
  id: number;
  name: string;
  photo: string;
  description: string;

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
  }

  saveRecipie(recipe: Recipe) {
    console.log(recipe);
  }
}
