import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Users } from '../user/users';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
//import { error } from 'console';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private apiUrl = 'https://pruebas.midasoft.co:5443/Apis_DLLO/Seleccion/api/SOL/RegistroInicialSolicitante';
  constructor(private http: HttpClient, private route: Router) { }
  //register(user: Users): Observable<string> {
  register(user: Users) {
    // Asegúrate de que la estructura de 'user' coincida con lo que el backend espera
    return this.http.post(this.apiUrl, user)
      .pipe(
        catchError((error) => {
          console.error('Error en la solicitud POST:', error);
          return of("ok");
        })
      );
    //console.log('res: ', res);
    //return res;
  }
}
