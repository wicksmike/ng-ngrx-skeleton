import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersLandingPageComponent } from './users-landing-page.component';

describe('UsersLandingPageComponent', () => {
  let component: UsersLandingPageComponent;
  let fixture: ComponentFixture<UsersLandingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersLandingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
