import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../core/guards/auth.guard';
import { AuthenticatedRoute } from '../core/guards/authenticated-route.service';
import { AllItemComponent } from './all-item/all-item.component';
import { CreateItemComponent } from './create-item/create-item.component';
import { DeleteItemComponent } from './delete-item/delete-item.component';
import { DetailsItemComponent } from './details-item/details-item.component';
import { EditItemComponent } from './edit-item/edit-item.component';
import { MyItemComponent } from './my-item/my-item.component';

const routes: Routes = [
  {
    path: 'item',
    canActivateChild: [AuthGuard],
    children: [
      { path: 'create', component: CreateItemComponent, canActivate: [AuthenticatedRoute] },
      { path: 'all', component: AllItemComponent },
      { path: 'myItems', component: MyItemComponent, canActivate: [AuthenticatedRoute]  },
      { path: 'edit/:id', component: EditItemComponent, canActivate: [AuthenticatedRoute]  },
      { path: 'details/:id', component: DetailsItemComponent },
      { path: 'delete/:id', component: DeleteItemComponent, canActivate: [AuthenticatedRoute]  }

    ]
  }
];

export const ItemRouterModule = RouterModule.forChild(routes);