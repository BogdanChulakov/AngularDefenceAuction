import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../core/guards/auth.guard';
import { CreateOfferComponent } from './create-offer/create-offer.component';
import { MyOfferComponent } from './my-offer/my-offer.component';


const routes: Routes = [
    {
        path: 'offer',
        canActivateChild: [AuthGuard],
        children: [
            { path: 'create/:orderId', component: CreateOfferComponent },
            { path: 'myOffer', component: MyOfferComponent },
        ]
    }
];

export const OfferRouterModule = RouterModule.forChild(routes);