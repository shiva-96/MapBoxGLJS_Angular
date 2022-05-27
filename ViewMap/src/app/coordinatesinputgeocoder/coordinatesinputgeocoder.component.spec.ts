import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordinatesinputgeocoderComponent } from './coordinatesinputgeocoder.component';

describe('CoordinatesinputgeocoderComponent', () => {
  let component: CoordinatesinputgeocoderComponent;
  let fixture: ComponentFixture<CoordinatesinputgeocoderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoordinatesinputgeocoderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoordinatesinputgeocoderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
