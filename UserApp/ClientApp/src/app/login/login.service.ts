import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Users } from '../user/users';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  baseUrl = "https://localhost:7228/api/";
  constructor(private http: HttpClient, private route: Router) { }

  login(values: any) {
    return this.http.post<Users>(this.baseUrl + 'account/login', values).pipe(
      map(users => {
        localStorage.setItem('email', users.email);
      })
    )
  }

  logout() {
    localStorage.removeItem('email');
    this.route.navigateByUrl('/');
  }
}
