import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput', {static: true}) nameInput: ElementRef;
  @ViewChild('amountInput', {static: true}) amountInput: ElementRef;
  constructor(private shoppingListService: ShoppingListService) {
  }

  ngOnInit() {
  }


  submit() {
    this.shoppingListService.shoppingListAChanged.emit({
      name: this.nameInput.nativeElement.value,
      amount: this.amountInput.nativeElement.value
    })
  }
}
