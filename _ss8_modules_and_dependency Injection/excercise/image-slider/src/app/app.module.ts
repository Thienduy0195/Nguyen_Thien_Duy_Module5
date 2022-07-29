import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ImageSliderModule } from './image-slider/image-slider.module';

@NgModule({
  imports: [BrowserModule, FormsModule, ImageSliderModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule {}
