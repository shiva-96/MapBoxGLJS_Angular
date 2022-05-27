import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistanceMeasureComponent } from './distance-measure.component';

describe('DistanceMeasureComponent', () => {
  let component: DistanceMeasureComponent;
  let fixture: ComponentFixture<DistanceMeasureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DistanceMeasureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DistanceMeasureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
