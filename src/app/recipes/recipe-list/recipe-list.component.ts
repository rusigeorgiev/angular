import { Recipe } from './../recipe.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Soft center cake', 'The best soft center cake',
    'http://www.sanjeevkapoor.com/UploadFiles/RecipeImages/Soft_Centered_Chocolate_Cakes_khanakhazana.jpg'),
    new Recipe('Пиле със зеле', 'Много яка рецепта за пиле със зеле',
    'http://www.supichka.com/files/images/268/resize_535_2000.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
