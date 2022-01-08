import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RocketLoaderComponent } from './rocket-loader.component';

describe('RocketLoaderComponent', () => {
  let component: RocketLoaderComponent;
  let fixture: ComponentFixture<RocketLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RocketLoaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RocketLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
