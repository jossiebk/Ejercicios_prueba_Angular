import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeMenuBtnComponent } from './home-menu-btn.component';

describe('HomeMenuBtnComponent', () => {
  let component: HomeMenuBtnComponent;
  let fixture: ComponentFixture<HomeMenuBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeMenuBtnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeMenuBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
