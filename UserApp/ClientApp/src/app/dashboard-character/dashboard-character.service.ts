import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Character } from '../shared/models/character';

@Injectable({
  providedIn: 'root'
})
export class DashboardCharacterService {

  constructor(private http: HttpClient) { }

  getData(url: string): Observable<Character[]> {
    //transformar el dato en la url correcta
    return this.http.get<Character[]>(url);
  }
}
