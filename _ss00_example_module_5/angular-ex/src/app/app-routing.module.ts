import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SubObjectComponent} from "./components/company/sub-object.component";
import {HomeComponent} from "./components/home/home.component";
import {ErrorComponent} from "./components/error/error.component";
import {MainObjectListComponent} from "./components/MainObject/main-object-list/main-object-list.component";
import {MainObjectCreateComponent} from "./components/MainObject/main-object-create/main-object-create.component";
import {MainObjectEditComponent} from "./components/MainObject/main-object-edit/main-object-edit.component";


const routes: Routes = [{
  path: '',
  component: HomeComponent
},
  {
    path: 'list',
    component: MainObjectListComponent
  },
  {
    path: 'ticket/create',
    component: MainObjectCreateComponent
  },
  {
    path: 'object/edit/:id',
    component: MainObjectEditComponent
  },
  {
    path: 'company',
    component: SubObjectComponent
  },
  {
    path: 'error',
    component: ErrorComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
