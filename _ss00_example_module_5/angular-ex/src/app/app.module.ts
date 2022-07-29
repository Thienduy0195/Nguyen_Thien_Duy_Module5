import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SubObjectComponent } from './components/company/sub-object.component';
import { ErrorComponent } from './components/error/error.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgxPaginationModule} from "ngx-pagination";
import { HomeComponent } from './components/home/home.component';
import {HttpClientModule} from "@angular/common/http";
import { MainObjectListComponent } from './components/MainObject/main-object-list/main-object-list.component';
import { MainObjectCreateComponent } from './components/MainObject/main-object-create/main-object-create.component';
import { MainObjectEditComponent } from './components/MainObject/main-object-edit/main-object-edit.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ToastrModule} from "ngx-toastr";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SubObjectComponent,
    ErrorComponent,
    HomeComponent,
    MainObjectListComponent,
    MainObjectCreateComponent,
    MainObjectEditComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        NgxPaginationModule,
        HttpClientModule,
        NgxPaginationModule,
        BrowserAnimationsModule,
        ToastrModule.forRoot({
            timeOut: 3000,
            closeButton: true,
            progressBar: true,
            positionClass: 'toast-bottom-right',
        }),
        FormsModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
