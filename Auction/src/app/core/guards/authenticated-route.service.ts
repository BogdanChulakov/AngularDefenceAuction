import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { AuthService } from "src/app/autentication/auth.service"; 

@Injectable()
export class AuthenticatedRoute implements CanActivate {
    constructor(
        private authService: AuthService,
        private router:Router
    ) {

    }
    canActivate(): boolean {
        if (this.authService.isLogged) {
            return true;
        } else {
            this.router.navigate(['/login']);
            return false;
        }
    }

}