import {Ingredient} from '../shared/ingredient.model';
import {EventEmitter, OnInit} from '@angular/core';

export class ShoppingListService implements OnInit {
  shoppingListAChanged = new EventEmitter<Ingredient[]>();
  ingredients: Ingredient[] = [
    new Ingredient('apples', 5),
    new Ingredient('carrot', 10),
  ];


  constructor() {

  }

  ngOnInit() {
    this.shoppingListAChanged.subscribe((ingredients: Ingredient[]) => {
      console.log('Ewqd');
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < ingredients.length; i++) {
        this.ingredients.push(ingredients[i]);
      }
    });
  }

  getIngredients() {
    return this.ingredients.slice();
  }


}
