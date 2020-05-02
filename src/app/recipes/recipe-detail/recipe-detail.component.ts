import {Component, DoCheck, Input, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';
import {RecipeService} from '../recipe.service';
import {ShoppingListService} from '../../shopping-list/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit, DoCheck {
  @Input('recipe') selectedRecipe: Recipe;

  constructor(private recipeService: RecipeService, private shoppingListService: ShoppingListService) {
  }

  ngOnInit() {
  }

  ngDoCheck() {
    console.log(this.selectedRecipe);
  }

  OnPushIngredientsToShoppingList(selectedRecipe) {
    console.log(selectedRecipe.ingredients);
    this.shoppingListService.shoppingListAChanged.emit(selectedRecipe.ingredients);
  }
}
