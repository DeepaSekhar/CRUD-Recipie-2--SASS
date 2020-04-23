import { Recipe } from "../models/recipie.model"
export class RecipeService {
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
    save(recipe: Recipe): void {
        this.listRecipe.push(recipe)

    }
}


