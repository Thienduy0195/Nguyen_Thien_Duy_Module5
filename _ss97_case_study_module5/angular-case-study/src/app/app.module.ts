import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ServiceBodyComponent } from './service-body/service-body.component';
import { ServiceModalEditComponent } from './service-modal-edit/service-modal-edit.component';
import { ServiceModalCreateComponent } from './service-modal-create/service-modal-create.component';
import { ServiceListComponent } from './service-list/service-list.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerBodyComponent } from './customer-body/customer-body.component';
import { CustomerCreateModalComponent } from './customer-create-modal/customer-create-modal.component';
import { CustomerEditModalComponent } from './customer-edit-modal/customer-edit-modal.component';
import { ContractListComponent } from './contract-list/contract-list.component';
import { ContractBodyComponent } from './contract-body/contract-body.component';
import { ContractCreateModalComponent } from './contract-create-modal/contract-create-modal.component';
import { HomeHeaderComponent } from './home-header/home-header.component';
import { HomeBodyComponent } from './home-body/home-body.component';
import { ContractComponent } from './contract/contract.component';
import { CustomerComponent } from './customer/customer.component';
import { ServiceComponent } from './service/service.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ServiceBodyComponent,
    ServiceModalEditComponent,
    ServiceModalCreateComponent,
    ServiceListComponent,
    CustomerListComponent,
    CustomerBodyComponent,
    CustomerCreateModalComponent,
    CustomerEditModalComponent,
    ContractListComponent,
    ContractBodyComponent,
    ContractCreateModalComponent,
    HomeHeaderComponent,
    HomeBodyComponent,
    ContractComponent,
    CustomerComponent,
    ServiceComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
