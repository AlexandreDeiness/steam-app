import { Component, OnInit } from '@angular/core';
import { JeuService } from '../jeu.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  games;

  constructor(private jeuservice:JeuService) { }

  ngOnInit() {
    this.games = this.jeuservice.getGames();
  }

}
