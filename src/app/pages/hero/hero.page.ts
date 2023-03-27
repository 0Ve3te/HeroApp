import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hero } from 'src/app/Models/hero.model';
import { HeroServiceService } from 'src/app/services/hero-service.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.page.html',
  styleUrls: ['./hero.page.scss'],
})
export class HeroPage implements OnInit {
  heroId: string = '';
  hero!: Hero;
  isLiked: boolean = false;

  constructor(private route: ActivatedRoute, private heroService: HeroServiceService) { }

  ngOnInit() {
    this.heroId = this.route.snapshot.paramMap.get('id')!;
    this.heroService.getHero(this.heroId).subscribe((res: Hero) => this.hero = res);

    let likedArr: Hero[] = JSON.parse(localStorage.getItem('favHeroes')!);

    if(localStorage.getItem('favHeroes') != null) {
        likedArr.forEach((hero:Hero) => {
          if(hero.id.toString() == this.heroId) {
            this.isLiked = true;
          }
      });
    }
  }

  AddToFav(hero: Hero) {
    if (localStorage.getItem('favHeroes') == null) {
      let favs = [];
      favs.push(hero);
      localStorage.setItem('favHeroes', JSON.stringify(favs));
    } else {
      let favs = JSON.parse(localStorage.getItem('favHeroes')!);
      favs.push(hero);
      localStorage.setItem('favHeroes', JSON.stringify(favs));
    }

    this.isLiked = true;
  }

  RemoveFromFav(hero: Hero) {
    let favs = JSON.parse(localStorage.getItem('favHeroes')!);
    favs = favs.filter((x:Hero) => x.name != hero.name);
    localStorage.setItem('favHeroes', JSON.stringify(favs));

    this.isLiked = false;
  }

}
