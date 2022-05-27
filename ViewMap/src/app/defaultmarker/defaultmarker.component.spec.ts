import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultmarkerComponent } from './defaultmarker.component';

describe('DefaultmarkerComponent', () => {
  let component: DefaultmarkerComponent;
  let fixture: ComponentFixture<DefaultmarkerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefaultmarkerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultmarkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
