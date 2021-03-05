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
      state('gray', style({
        backgroundColor: 'dimgrey'
      })),
      transition('red => gray', animate(1200)),
      transition('gray => red', animate(3000))
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
    this.state == "red" ? this.state="gray" : this.state="red"
  }
}
