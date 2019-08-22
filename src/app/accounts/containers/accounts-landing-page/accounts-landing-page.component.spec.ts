import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountsLandingPageComponent } from './accounts-landing-page.component';

describe('AccountsLandingPageComponent', () => {
  let component: AccountsLandingPageComponent;
  let fixture: ComponentFixture<AccountsLandingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountsLandingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountsLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
