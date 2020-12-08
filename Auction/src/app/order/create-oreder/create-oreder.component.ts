import { Component, OnInit } from '@angular/core';
import { OrderModel } from 'src/app/autentication/models/order.model';


@Component({
  selector: 'app-create-oreder',
  templateUrl: './create-oreder.component.html',
  styleUrls: ['./create-oreder.component.css']
})
export class CreateOrederComponent implements OnInit {

  model: OrderModel;

  constructor() {
    this.model = new OrderModel('', '', '', 0, '');
  }

  ngOnInit(): void {

  }
  create(){
    console.log(this.model)
  }

}
