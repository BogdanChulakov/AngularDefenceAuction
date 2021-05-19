import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateConfigService } from './translate-config.service';


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
    OfferModule,
    BrowserAnimationsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderfactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    AuthService,
    AuthGuard,
    AuthenticatedRoute,
    TranslateConfigService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function HttpLoaderfactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
