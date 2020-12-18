import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './autentication/login/login.component';
import { RegisterComponent } from './autentication/register/register.component';
import { HomeComponent } from './home/home.component';
import { AuthService } from './autentication/auth.service';
import { AuthGuard } from './core/guards/auth.guard';
import { ItemModule } from './item/item.module';
import { OfferModule } from './offer/offer.module';
import { UserDetailsComponent } from './autentication/user-details/user-details.component';
import { EditProfileComponent } from './autentication/edit-profile/edit-profile.component';
import { AuthenticatedRoute } from './core/guards/authenticated-route.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    UserDetailsComponent,
    EditProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ItemModule,
    OfferModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    AuthenticatedRoute
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
