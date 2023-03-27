import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from 'src/app/Models/hero.model';
import { HeroServiceService } from 'src/app/services/hero-service.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.page.html',
  styleUrls: ['./heroes.page.scss'],
})
export class HeroesPage implements OnInit {

  constructor(private heroService: HeroServiceService, private router: Router) { }
  heroes!: Hero[];

  heroesDTO!: Hero[];
  index: number = 0;

  likedHeroes!: Hero[];

  ngOnInit() {
    if(localStorage.getItem('heroes') != null) {
      this.heroes = JSON.parse(localStorage.getItem('heroes')!);
    } else {
      this.heroService.getAllHeroes().subscribe((res: [Hero]) => {
        this.heroes = res;
        localStorage.setItem('heroes', JSON.stringify(res));
      });
    }

    this.heroesDTO = this.heroes.slice(this.index, 20);
    this.index = 20;
  }

  inputChanged($event:any) {
    console.log($event.detail.value);
    this.heroes = JSON.parse(localStorage.getItem('heroes')!);
    this.heroes = this.heroes.filter(f => f.name.includes($event.detail.value));
    this.heroesDTO = this.heroes;

    if($event.detail.value == '') {
      this.heroes = JSON.parse(localStorage.getItem('heroes')!);
      this.heroesDTO = this.heroes;
    }
  }

  loadMoreHeroes() {
    this.index += 20;
    this.heroesDTO = this.heroes.slice(0, this.index);
    console.log(this.heroesDTO);
  }

  redirectToRace(race: string) {
    this.router.navigate([`/race/${race}`]);
  }
}
