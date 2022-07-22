import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DictionaryPageComponent} from './dictionary-page/dictionary-page.component';
import {SearchDictionaryComponent} from './search-dictionary/search-dictionary.component';
import {DetailComponent} from "./detail/detail.component";


const routes: Routes = [
  {
    path: '',
    component: DictionaryPageComponent
  },
  {
  path: 'dictionary',
  component: DictionaryPageComponent
},
  {
    path: 'search',
    component: SearchDictionaryComponent
  },
  {
    path: 'detail/:word',
    component: DetailComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
