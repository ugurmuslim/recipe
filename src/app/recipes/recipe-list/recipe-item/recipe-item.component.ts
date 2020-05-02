import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {RecipeService} from '../../recipe.service';
import {Ingredient} from '../../../shared/ingredient.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent implements OnInit {
  @Input('r') recipe: { name: string, description: string, imagePath: string, ingredients: Ingredient[] };

  constructor(private recipeService: RecipeService) {
  }

  ngOnInit() {
  }

  OnSelectRecipe() {
    this.recipeService.recipeSelected.emit(this.recipe);
  }
}
