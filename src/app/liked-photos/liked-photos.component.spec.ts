import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikedPhotosComponent } from './liked-photos.component';

describe('LikedPhotosComponent', () => {
  let component: LikedPhotosComponent;
  let fixture: ComponentFixture<LikedPhotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LikedPhotosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LikedPhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
