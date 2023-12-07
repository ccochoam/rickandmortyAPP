import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EpisodesResponse } from '../shared/models/episodes-response';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  //private apiUrl = 'https://rickandmortyapi.com/api/';
  private apiUrl = 'https://rickandmortyapi.com/api/episode';

  constructor(private http: HttpClient) { }

  getData(page: number): Observable<EpisodesResponse> {
    var url = page == 1 ? this.apiUrl : this.apiUrl + '?page=' + page;
    return this.http.get<EpisodesResponse>(url);
  }
}
