import {Recipe} from './recipe.model';
import {EventEmitter} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe('Test Recipe', 'test', 'https://www.cookingclassy.com/wp-content/uploads/2019/05/fiesta-rice-recipe-7.jpg',
      [new Ingredient('Marul', 1),
        new Ingredient('Salatalık', 3),
        new Ingredient('Biftek', 5)]),
    new Recipe('Test Recipe2', 'test', 'https://www.cookingclassy.com/wp-content/uploads/2019/05/fiesta-rice-recipe-7.jpg',
      [new Ingredient('Bamya', 2),
        new Ingredient('Pırasa', 2),
        new Ingredient('Kabak', 2)])
  ];


  getRecipes() {
    return this.recipes.slice();
  }

}
