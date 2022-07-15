import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardAnalyticComponent } from './dashboard-analytic.component';

describe('DashboardAnalyticComponent', () => {
  let component: DashboardAnalyticComponent;
  let fixture: ComponentFixture<DashboardAnalyticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardAnalyticComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardAnalyticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
