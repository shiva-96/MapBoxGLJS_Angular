import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradientSkyLayerMapComponent } from './gradient-sky-layer-map.component';

describe('GradientSkyLayerMapComponent', () => {
  let component: GradientSkyLayerMapComponent;
  let fixture: ComponentFixture<GradientSkyLayerMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GradientSkyLayerMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GradientSkyLayerMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
