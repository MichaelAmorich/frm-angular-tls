import { Injectable } from '@angular/core';
import { Observable, delay, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn: boolean = false;
  redirectUrl: string;

  login(name: string, password: string): Observable<boolean> {
    let isLoggedIn = (name === 'admin' && password === 'admin');

    return of(true).pipe(
      delay(1000),
      tap(() => this.isLoggedIn = isLoggedIn)
    )
  }

  logout() {
    this.isLoggedIn = false;
    // Delete le localstorage (token)
  }
}
