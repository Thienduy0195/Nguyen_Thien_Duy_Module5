import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Mp3PlaylistComponent} from './mp3-playlist/mp3-playlist.component';
import {Mp3PlayerComponent} from './mp3-player/mp3-player.component';


const routes: Routes = [
  {
    path: 'youtube',
    component: Mp3PlaylistComponent,
    children: [{
      path: ':id',
      component: Mp3PlayerComponent
    }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
