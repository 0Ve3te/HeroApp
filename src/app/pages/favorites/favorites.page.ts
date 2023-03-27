import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/Models/hero.model';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {

  heroes!: Hero[];

  constructor() { }

  ngOnInit() {

    this.heroes = JSON.parse(localStorage.getItem('favHeroes')!);
  }

}
