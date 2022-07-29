import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContractComponent } from './component/contract/contract.component';
import { CustomerComponent } from './component/customer/customer.component';
import { ServiceComponent } from './component/service/service.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { HomeComponent } from './component/home/home.component';
import { CreateCustomerComponent } from './component/customer/create-customer/create-customer.component';
import { EditCustomerComponent } from './component/customer/edit-customer/edit-customer.component';
import { CreateContractComponent } from './component/contract/create-contract/create-contract.component';
import { CreateServiceComponent } from './component/service/create-service/create-service.component';
import { EditServiceComponent } from './component/service/edit-service/edit-service.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ErrorComponent } from './component/error/error.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ToastrModule} from "ngx-toastr";
import {NgxPaginationModule} from "ngx-pagination";

@NgModule({
  declarations: [
    AppComponent,
    ContractComponent,
    CustomerComponent,
    ServiceComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CreateCustomerComponent,
    EditCustomerComponent,
    CreateContractComponent,
    CreateServiceComponent,
    EditServiceComponent,
    CustomerComponent,
    ErrorComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        ToastrModule.forRoot({
            timeOut: 3000,
            closeButton: true,
            progressBar: true,
            positionClass: 'toast-bottom-right',
        }),
        FormsModule,
      NgxPaginationModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
