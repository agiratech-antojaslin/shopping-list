import { Component, ElementRef, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild("nameInput") nameInputRef!: ElementRef;
  @ViewChild("amountInput") amountInputRef!: ElementRef;
  @Output() newIngredientAdded = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit(): void {
  }

  onIngredientAdded() {
    const name = this.nameInputRef.nativeElement.value;
    const amount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(name, amount);
    this.newIngredientAdded.emit(newIngredient);
  }

}
