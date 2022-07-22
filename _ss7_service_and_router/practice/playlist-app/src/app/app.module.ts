import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Mp3PlaylistComponent } from './mp3-playlist/mp3-playlist.component';
import { Mp3PlayerComponent } from './mp3-player/mp3-player.component';

@NgModule({
  declarations: [
    AppComponent,
    Mp3PlaylistComponent,
    Mp3PlayerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
