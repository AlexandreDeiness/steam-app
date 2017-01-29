import { Component, OnInit } from '@angular/core';
import { JeuService } from '../jeu.service';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {
  desc;

  constructor(private jeuservice:JeuService) { }

  ngOnInit() {
    this.desc = this.jeuservice.getDesc();
  }
  }

}
