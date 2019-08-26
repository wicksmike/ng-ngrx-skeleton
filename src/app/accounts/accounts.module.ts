import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountsRoutingModule } from './accounts-routing.module';
import { AccountsLandingPageComponent } from './containers/accounts-landing-page/accounts-landing-page.component';
import { AccountsListComponent } from './components/accounts-list/accounts-list.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  declarations: [AccountsLandingPageComponent, AccountsListComponent],
  imports: [
    CommonModule,
    AccountsRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ]
})
export class AccountsModule {}
