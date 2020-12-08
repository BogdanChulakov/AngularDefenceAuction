import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateOrederComponent } from './create-oreder/create-oreder.component';
import { AllOrderComponent } from './all-order/all-order.component';
import { EditOrderComponent } from './edit-order/edit-order.component';
import { OrderRouterModule } from './order-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CreateOrederComponent,
    AllOrderComponent,
    EditOrderComponent
  ],
  imports: [
    CommonModule,
    OrderRouterModule,
    FormsModule
  ],
  providers: [

  ],
  exports: [
  ]
})
export class OrderModule { }