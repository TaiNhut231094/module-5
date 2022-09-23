import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CalculatorComponent} from './calculator/calculator.component';
import {ColorComponent} from './color/color.component';
import {ArticleComponent} from './article/article.component';


const routes: Routes = [
  {
    path: 'calculator',
    component: CalculatorComponent
  },
  {
    path: 'color',
    component: ColorComponent
  },
  {
    path: '',
    component: ArticleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
