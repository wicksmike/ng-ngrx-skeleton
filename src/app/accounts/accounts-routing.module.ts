import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountsContainerComponent } from './containers/accounts-container.component';

const routes: Routes = [{ path: '', component: AccountsContainerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountsRoutingModule { }
