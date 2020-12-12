import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../core/guards/auth.guard';
import { AllItemComponent } from './all-item/all-item.component';
import { CreateItemComponent } from './create-item/create-item.component';
import { DetailsItemComponent } from './details-item/details-item.component';
import { EditItemComponent } from './edit-item/edit-item.component';
import { MyItemComponent } from './my-item/my-item.component';

const routes: Routes = [
  {
    path: 'item',
    canActivateChild: [AuthGuard],
    children: [
      { path: 'create', component: CreateItemComponent },
      { path: 'all', component: AllItemComponent },
      { path: 'myItems', component: MyItemComponent },
      { path: 'edit/:id', component: EditItemComponent },
      { path: 'details/:id', component: DetailsItemComponent }
    ]
  }
];

export const ItemRouterModule = RouterModule.forChild(routes);