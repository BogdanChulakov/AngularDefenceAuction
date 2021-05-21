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
import { ShortenPipe } from '../core/pipes/shorten.pipe';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';



@NgModule({
  declarations: [
    CreateItemComponent,
    AllItemComponent,
    EditItemComponent,
    DetailsItemComponent,
    MyItemComponent,
    DeleteItemComponent,
    ShortenPipe
  ],
  imports: [
    CommonModule,
    ItemRouterModule,
    FormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderfactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    ItemService,
    AuthenticatedRoute
  ],
  exports: [
  ]
})
export class ItemModule { }
export function HttpLoaderfactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
