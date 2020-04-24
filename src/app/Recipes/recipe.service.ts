import { Recipe } from "../models/recipie.model"
import { identifierModuleUrl } from '@angular/compiler';
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

    //sending service to add a recipie by aincreasing its it
    save(recipe: Recipe): void {
        const dish = {
            ...recipe,
            id: this.listRecipe.length + 1

        }
        console.log("dish", dish)
        this.listRecipe.push(dish);
    }
    // sending service finding the recipie belonging to the specified id
    deleteRecipe(id: number) {
        const i = this.listRecipe.findIndex(e => e.id === id)
        if (i != -1) {
            this.listRecipe.splice(i, 1)
        }
    }
}





