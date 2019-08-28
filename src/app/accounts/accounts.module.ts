import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AccountsRoutingModule } from './accounts-routing.module';
import { AccountsListComponent } from './components/accounts-list/accounts-list.component';
import { AccountsLandingPageComponent } from './containers/accounts-landing-page/accounts-landing-page.component';
import { AccountEffects } from './store/account.effects';
import * as fromAccount from './store/account.reducer';

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
