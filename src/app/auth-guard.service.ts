import { inject } from "@angular/core";
import { Router, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "./auth.service";

export const pokemonGuard = () => {
    return true;
    const router = inject(Router);
    const authService = inject(AuthService);

    if (authService.isLoggedIn) { return true }

    authService.redirectUrl = window.location.pathname;
    console.log(authService.redirectUrl);
    router.navigate(['/login']);

    return false;
}