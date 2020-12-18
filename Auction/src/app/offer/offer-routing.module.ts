import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../core/guards/auth.guard';
import { AuthenticatedRoute } from '../core/guards/authenticated-route.service';
import { NotFoundComponent } from '../core/not-found/not-found.component';
import { AllOffersComponent } from './all-offers/all-offers.component';
import { CreateOfferComponent } from './create-offer/create-offer.component';
import { MyOffersComponent } from './my-offers/my-offers.component';


const routes: Routes = [
    {
        path: 'offer',
        canActivateChild: [AuthGuard],
        children: [
            { path: 'create/:itemId', component: CreateOfferComponent,canActivate: [AuthenticatedRoute]  },
            { path: 'getAllOffers/:itemId', component: AllOffersComponent, canActivate: [AuthenticatedRoute]  },
            { path: 'myOffers', component: MyOffersComponent, canActivate: [AuthenticatedRoute]  },
        ]
    },
    {
        path: '**', component: NotFoundComponent
    }

];

export const OfferRouterModule = RouterModule.forChild(routes);