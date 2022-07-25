import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyticHomeComponent } from './analytic-home.component';

describe('AnalyticHomeComponent', () => {
  let component: AnalyticHomeComponent;
  let fixture: ComponentFixture<AnalyticHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnalyticHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnalyticHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
