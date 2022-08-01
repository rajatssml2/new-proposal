import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InnovationLabHomeComponent } from './innovation-lab-home.component';

describe('InnovationLabHomeComponent', () => {
  let component: InnovationLabHomeComponent;
  let fixture: ComponentFixture<InnovationLabHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InnovationLabHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InnovationLabHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
