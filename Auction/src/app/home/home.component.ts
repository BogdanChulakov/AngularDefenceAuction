import { Component, OnInit } from '@angular/core';
import { trigger, transition, animate, state, style } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('divState', [
      state('red', style({
        opacity: 0,
        transform:'translateX(-100px)',
        backgroundColor: 'red'
      })),
      state('blue', style({
        backgroundColor: 'blue'
      })),
      transition('red => blue', animate(1200)),
      transition('blue => red', animate(3000))
    ]),
    trigger('h1State',[
      transition('void => *', [
        style({
          opacity: 0,
          transform:'translateX(-100px)'
        }),
        animate(2000)
      ]),
    ])
  ]
})
export class HomeComponent implements OnInit {

  state = 'red';

  constructor() { }

  ngOnInit(): void {
  }

  onAnimete() {
    this.state == "red" ? this.state="blue" : this.state="red"
  }
}
