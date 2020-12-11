import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../core/guards/auth.guard';
import { CreateOfferComponent } from './create-offer/create-offer.component';
import { MyOffersComponent } from './my-offers/my-offers.component';


const routes: Routes = [
    {
        path: 'offer',
        canActivateChild: [AuthGuard],
        children: [
            { path: 'create/:orderId', component: CreateOfferComponent },
            { path: 'myOffers', component: MyOffersComponent },
        ]
    }
];

export const OfferRouterModule = RouterModule.forChild(routes);