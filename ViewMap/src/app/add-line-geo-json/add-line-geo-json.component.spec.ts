import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLineGeoJsonComponent } from './add-line-geo-json.component';

describe('AddLineGeoJsonComponent', () => {
  let component: AddLineGeoJsonComponent;
  let fixture: ComponentFixture<AddLineGeoJsonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddLineGeoJsonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddLineGeoJsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
