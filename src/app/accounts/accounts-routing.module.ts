import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountsLandingPageComponent } from './containers/accounts-landing-page/accounts-landing-page.component';

const routes: Routes = [{ path: '', component: AccountsLandingPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountsRoutingModule {}
