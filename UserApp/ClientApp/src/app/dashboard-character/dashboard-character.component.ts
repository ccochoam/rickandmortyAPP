import { Component } from '@angular/core';
import { DashboardCharacterService } from '../dashboard-character/dashboard-character.service';
import { ChangeDetectorRef } from '@angular/core';
import { Character } from '../shared/models/character';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard-character',
  templateUrl: './dashboard-character.component.html',
  styleUrls: ['./dashboard-character.component.css']
})
export class DashboardCharacterComponent {
  character?: Character[];
  name?: string;
  episode?: string;
  urlCharacters: string = "https://rickandmortyapi.com/api/character/";
  constructor(private route: ActivatedRoute, private dashboardCharacterService: DashboardCharacterService, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.name = params['name'];
      this.episode = params['episode'];
      const urls = params['characters'] ? params['characters'] : [];
      this.getData(urls);
    });
  }

  getData(urls: string): void {
    const urlsArray = urls.split(',');
    const charactersIds = urlsArray.map(url => url.split('/').pop());
    var urlApi = this.urlCharacters + charactersIds;
    this.dashboardCharacterService.getData(urlApi).subscribe(
      (data) => {
        console.log('data response:', data);
        this.character = data;
        this.cdr.detectChanges();
      },
      (error) => {
        console.error("Hubo un error:", error)
      }
    );
  }
}
