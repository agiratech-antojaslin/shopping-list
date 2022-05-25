import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes = [
              new Recipe("Chicken Basqaise", "This braised chicken recipe is emblematic of the Basque region’s affection for colorful, peppery stews and is adapted from a version served by Spanish chef Sébastien Gravé.", "https://www.saveur.com/uploads/2019/02/08/E42B54E7FHVCG2H7X5QAHSXESA-1024x768.jpg"),
              new Recipe("Barigoule of Spring Vegetables", "Chef Armand Arnal of New York café-bakery Maman and Michelin-starred La Chassagnette in Arles, France lightens up this Provençal classic, showcasing spring’s snappy asparagus and sweet peas.", "https://www.saveur.com/uploads/2019/03/18/GJRZDINWLLLI5MSE6GOP4NGQPE-1024x768.jpg"),
              new Recipe("Alsatian Bacon and Onion Tart", "Chef Gabriel Kreuther ofhe Modern restaurant in New York City heats the pizza stone for an hour before baking, giving this savory tart a crispy crust.", "https://www.saveur.com/uploads/2019/02/08/LXZKMKITMJSDCIAXFIBNTFAM2U.jpg?auto=webp"),
            ];
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
