import { Component } from '@angular/core';
import { DashboardService } from '../dashboard/dashboard.service';
import { EpisodesResponse } from '../shared/models/episodes-response';
import { ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  episodesResponse?: EpisodesResponse;
  private currentPage: number = 1;
  private totalPages: number = 0;
  constructor(private dashboardService: DashboardService, private cdr: ChangeDetectorRef, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const parametroOpcional = params['nombreDelParametro'];
      // Hacer algo con el parámetro opcional
    });
    this.getData(this.currentPage);
  }
  goToPage(pageNumber: number): void {

    this.currentPage = pageNumber;
  }
  getData(pageNumber: number): void {
    this.currentPage = pageNumber;
    this.dashboardService.getData(this.currentPage).subscribe(
      (data) => {
        this.totalPages = data.info.pages;
        this.episodesResponse = data;
        this.cdr.detectChanges();
      },
      (error) => {
        console.error('Error al obtener datos:', error);
      }
    );
  }
  previousPage(): void {
    if (this.currentPage > 1) {
      this.getData(this.currentPage - 1);
    }
  }
  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.getData(this.currentPage + 1);
    }
  }
}
