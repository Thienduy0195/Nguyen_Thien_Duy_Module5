import { Component, OnInit } from '@angular/core';
import {SongService} from '../service/song.service';
import {Song} from "../model/song";

@Component({
  selector: 'app-mp3-playlist',
  templateUrl: './mp3-playlist.component.html',
  styleUrls: ['./mp3-playlist.component.css']
})
export class Mp3PlaylistComponent implements OnInit {

  playlist: Song[] = [];
  constructor(private songService: SongService) {}

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.playlist = this.songService.playlist;
  }

}
