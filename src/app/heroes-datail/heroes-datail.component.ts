import { Component, OnInit,Input } from '@angular/core';
import { Hero } from '../hero';

@Component({
  standalone:true,
  selector: 'app-heroes-datail',
  templateUrl: './heroes-datail.component.html',
  styleUrls: ['./heroes-datail.component.css'],
})
export class HeroesDatailComponent implements OnInit {
  @Input() selectedHero?: Hero;
  constructor() { }

  ngOnInit() {
  }

}