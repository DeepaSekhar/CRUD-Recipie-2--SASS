import { Component, OnInit } from '@angular/core';
import { Recipe } from "../../models/recipie.model"
import { RecipeService } from "../recipe.service"
import { NgForm } from "@angular/forms"
@Component({
  selector: 'app-create-recipies',
  templateUrl: './create-recipies.component.html',
  styleUrls: ['./create-recipies.component.scss']
})

export class CreateRecipiesComponent implements OnInit {


  id: number;
  name: string;
  photo: string;
  description: string;

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
  }

  saveRecipe() {
    const createRecipe = {

      id: null,
      name: this.name,
      photo: this.photo,
      description: this.description
    }

    this.recipeService.save(createRecipe);

  }

}