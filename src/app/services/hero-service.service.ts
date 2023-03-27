import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Hero } from '../Models/hero.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroServiceService {

  constructor(private http: HttpClient) { }

  getAllHeroes(): Observable<[Hero]> {
    return this.http.get<[Hero]>("https://akabab.github.io/superhero-api/api/all.json");
  }

  getHero(id: string): Observable<Hero> {
    return this.http.get<Hero>(`https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/id/${id}.json`);
  }

  getHeroesByRace(race: string): Hero[] {
    let hero = JSON.parse(localStorage.getItem('heroes')!);

    hero = hero.filter((hero: Hero) => hero.appearance.race == race);
    return hero;
  }

}
