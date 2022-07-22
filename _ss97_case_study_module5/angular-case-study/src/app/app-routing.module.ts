import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ContractComponent} from './contract/contract.component';
import {CustomerComponent} from './customer/customer.component';
import {ServiceComponent} from './service/service.component';
import {HomeComponent} from './home/home.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'contract', component: ContractComponent},
  {path: 'customer', component: CustomerComponent},
  {path: 'service', component: ServiceComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
