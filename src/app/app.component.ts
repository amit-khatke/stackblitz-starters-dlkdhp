import { Component, OnInit } from '@angular/core';
import { HeroesDatailComponent } from './heroes-datail/heroes-datail.component';
import { HeroesComponent } from './heroes/heroes.component';

@Component({
  standalone:true,
  selector: 'app-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports:[HeroesComponent,HeroesDatailComponent],
})
export class AppComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}