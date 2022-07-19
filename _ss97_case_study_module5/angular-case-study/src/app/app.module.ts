import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';an
import { FooterComponent } from './footer/footer.component';
import { ServiceBodyComponent } from './service-body/service-body.component';
import { ServiceModalEditComponent } from './service-modal-edit/service-modal-edit.component';
import { ServiceModalCreateComponent } from './service-modal-create/service-modal-create.component';
import { ServiceListComponent } from './service-list/service-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ServiceBodyComponent,
    ServiceModalEditComponent,
    ServiceModalCreateComponent,
    ServiceListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
