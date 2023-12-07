import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardCharacterComponent } from './dashboard-character.component';

describe('DashboardCharacterComponent', () => {
  let component: DashboardCharacterComponent;
  let fixture: ComponentFixture<DashboardCharacterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardCharacterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
