import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayOnClickComponent } from './display-on-click.component';

describe('DisplayOnClickComponent', () => {
  let component: DisplayOnClickComponent;
  let fixture: ComponentFixture<DisplayOnClickComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayOnClickComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayOnClickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
