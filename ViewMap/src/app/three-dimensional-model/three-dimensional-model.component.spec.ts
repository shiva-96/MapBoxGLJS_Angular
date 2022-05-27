import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeDimensionalModelComponent } from './three-dimensional-model.component';

describe('ThreeDimensionalModelComponent', () => {
  let component: ThreeDimensionalModelComponent;
  let fixture: ComponentFixture<ThreeDimensionalModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThreeDimensionalModelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreeDimensionalModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
