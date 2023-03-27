import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hero } from 'src/app/Models/hero.model';
import { HeroServiceService } from 'src/app/services/hero-service.service';

@Component({
  selector: 'app-race',
  templateUrl: './race.page.html',
  styleUrls: ['./race.page.scss'],
})
export class RacePage implements OnInit {

  id: string = '';
  heroes!: Hero[];

  constructor(private router: ActivatedRoute, private heroService: HeroServiceService) { }

  ngOnInit() {
    this.id = this.router.snapshot.paramMap.get('id')!;
    this.heroes = this.heroService.getHeroesByRace(this.id);
  }

}
