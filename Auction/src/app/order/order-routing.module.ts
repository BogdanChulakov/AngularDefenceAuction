import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../core/guards/auth.guard';
import { AllOrderComponent } from './all-order/all-order.component';
import { CreateOrederComponent } from './create-oreder/create-oreder.component';
import { DetailsOrderComponent } from './details-order/details-order.component';
import { EditOrderComponent } from './edit-order/edit-order.component';

const routes: Routes = [
  {
    path: 'order',
    canActivateChild: [AuthGuard],
    children: [
  { path: 'create', component: CreateOrederComponent },
  { path: 'all', component: AllOrderComponent },
  { path: 'edit', component: EditOrderComponent },
  { path: 'details/:id', component: DetailsOrderComponent }
]
 }
];

export const OrderRouterModule = RouterModule.forChild(routes);