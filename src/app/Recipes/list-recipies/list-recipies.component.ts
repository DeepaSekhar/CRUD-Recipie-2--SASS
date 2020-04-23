import { Component, OnInit } from '@angular/core';
import { Recipe } from "../../models/recipie.model"

@Component({
  selector: 'app-list-recipies',
  templateUrl: './list-recipies.component.html',
  styleUrls: ['./list-recipies.component.scss']
})
export class ListRecipiesComponent implements OnInit {
  recipe: Recipe
  id: number;
  name: string;
  photo: string;
  description: string
  recipes: Recipe[] = [
    {
      id: 1,
      name: "Thali",
      photo: "assets/images/thali.jpg",
      description: "south indian dish"
    }

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
