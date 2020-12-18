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
import { DeleteItemComponent } from './delete-item/delete-item.component';
import { AuthenticatedRoute } from '../core/guards/authenticated-route.service';



@NgModule({
  declarations: [
    CreateItemComponent,
    AllItemComponent,
    EditItemComponent,
    DetailsItemComponent,
    MyItemComponent,
    DeleteItemComponent
  ],
  imports: [
    CommonModule,
    ItemRouterModule,
    FormsModule
  ],
  providers: [
    ItemService,
    AuthenticatedRoute
  ],
  exports: [
  ]
})
export class ItemModule { }
