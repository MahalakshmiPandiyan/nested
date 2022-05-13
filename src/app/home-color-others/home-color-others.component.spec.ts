import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeColorOthersComponent } from './home-color-others.component';

describe('HomeColorOthersComponent', () => {
  let component: HomeColorOthersComponent;
  let fixture: ComponentFixture<HomeColorOthersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeColorOthersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeColorOthersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
