import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeComponent } from './recipe/recipe.component';
import { RecipesComponent } from './recipes.component';

@NgModule({
  declarations: [RecipeComponent, RecipesComponent],
  imports: [
    CommonModule
  ]
})
export class RecipesModule { }
