import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddpolygonComponent } from './addpolygon.component';

describe('AddpolygonComponent', () => {
  let component: AddpolygonComponent;
  let fixture: ComponentFixture<AddpolygonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddpolygonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddpolygonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
