import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FromDateComponent } from './from-date.component';

describe('FromDateComponent', () => {
  let component: FromDateComponent;
  let fixture: ComponentFixture<FromDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FromDateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FromDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
