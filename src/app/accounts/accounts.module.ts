import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountsRoutingModule } from './accounts-routing.module';
import { AccountsLandingPageComponent } from './containers/accounts-landing-page/accounts-landing-page.component';


@NgModule({
  declarations: [AccountsLandingPageComponent],
  imports: [
    CommonModule,
    AccountsRoutingModule
  ]
})
export class AccountsModule { }
