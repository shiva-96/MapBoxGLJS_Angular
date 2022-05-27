import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UndermousepointerComponent } from './undermousepointer.component';

describe('UndermousepointerComponent', () => {
  let component: UndermousepointerComponent;
  let fixture: ComponentFixture<UndermousepointerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UndermousepointerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UndermousepointerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
