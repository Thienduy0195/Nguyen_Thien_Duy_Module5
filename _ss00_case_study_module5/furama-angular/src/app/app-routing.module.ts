import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ContractComponent} from "./component/contract/contract.component";
import {CustomerComponent} from "./component/customer/customer.component";
import {ServiceComponent} from "./component/service/service.component";
import {HomeComponent} from "./component/home/home.component";
import {CreateCustomerComponent} from "./component/customer/create-customer/create-customer.component";
import {EditCustomerComponent} from "./component/customer/edit-customer/edit-customer.component";
import {ErrorComponent} from "./component/error/error.component";
import {CreateContractComponent} from "./component/contract/create-contract/create-contract.component";


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'contract', component: ContractComponent},
  {path: 'contract/create', component: CreateContractComponent},
  {path: 'customer', component: CustomerComponent},
  {path: 'customer/create', component: CreateCustomerComponent},
  {path: 'customer/update/:id', component: EditCustomerComponent},
  {path: 'service', component: ServiceComponent},
  {path: 'error', component: ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
