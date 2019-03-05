import {Component, Input, OnInit} from '@angular/core';
import { Hero } from '../heroes/hero';
import { HeroService } from "../hero.service";
import {ActivatedRoute} from "@angular/router";
import { Location } from '@angular/common';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styles: []
})
export class HeroDetailComponent implements OnInit {

  hero: Hero;

  constructor(
      private heroService: HeroService,
      private location: Location,
      private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.getHero();
  }

  save(): void {
    this.heroService.updateHero(this.hero)
        .subscribe(() => this.goBack());
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id).subscribe(
        hero => this.hero = hero
    );
  }

  goBack(): void {
    this.location.back();
  }

}
