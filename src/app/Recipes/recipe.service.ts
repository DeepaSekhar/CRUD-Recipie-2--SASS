import { Recipe } from "../models/recipie.model"
export class recipeService {
    private listRecipe: Recipe[] = [
        {
            id: 1,
            name: "Thali",
            photo: "assets/images/thali.jpg",
            description: "south indian dish"
        }]
    //list recipe
    getRecipe(): Recipe[] {
        return this.listRecipe;
    }

}


