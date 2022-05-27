import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewlayerComponent } from './newlayer.component';

describe('NewlayerComponent', () => {
  let component: NewlayerComponent;
  let fixture: ComponentFixture<NewlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewlayerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
