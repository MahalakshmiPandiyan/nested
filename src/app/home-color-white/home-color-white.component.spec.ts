import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeColorWhiteComponent } from './home-color-white.component';

describe('HomeColorWhiteComponent', () => {
  let component: HomeColorWhiteComponent;
  let fixture: ComponentFixture<HomeColorWhiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeColorWhiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeColorWhiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
