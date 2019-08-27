import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { AccountsRoutingModule } from './accounts-routing.module';
import { AccountsListComponent } from './components/accounts-list/accounts-list.component';
import { AccountsLandingPageComponent } from './containers/accounts-landing-page/accounts-landing-page.component';
import { StoreModule } from '@ngrx/store';
import * as fromAccount from './store/account.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AccountEffects } from './store/account.effects';

@NgModule({
  declarations: [AccountsLandingPageComponent, AccountsListComponent],
  imports: [
    CommonModule,
    AccountsRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    StoreModule.forFeature(fromAccount.accountFeatureKey, fromAccount.reducer),
    EffectsModule.forFeature([AccountEffects])
  ]
})
export class AccountsModule {}
