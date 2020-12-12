import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateItemComponent } from './create-item/create-item.component';
import { AllItemComponent } from './all-item/all-item.component';
import { EditItemComponent } from './edit-item/edit-item.component';
import { ItemRouterModule } from './item-routing.module';
import { FormsModule } from '@angular/forms';
import { DetailsItemComponent } from './details-item/details-item.component';
import { MyItemComponent } from './my-item/my-item.component';
import { ItemService } from './item.service';



@NgModule({
  declarations: [
    CreateItemComponent,
    AllItemComponent,
    EditItemComponent,
    DetailsItemComponent,
    MyItemComponent
  ],
  imports: [
    CommonModule,
    ItemRouterModule,
    FormsModule
  ],
  providers: [
    ItemService
  ],
  exports: [
  ]
})
export class ItemModule { }
