import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store';
import * as AccountActions from '../../store/account.actions';
import { Account } from '../../store/account.model';
import * as AccountSelectors from '../../store/account.selectors';

@Component({
  selector: 'app-accounts-landing-page',
  templateUrl: './accounts-landing-page.component.html',
  styleUrls: ['./accounts-landing-page.component.scss']
})
export class AccountsLandingPageComponent implements OnInit {
  public accounts$: Observable<Account[]>;

  constructor(private store: Store<AppState>) {
    this.accounts$ = this.store.select(AccountSelectors.selectAllAccounts);
  }

  public ngOnInit() {
    this.store.dispatch(AccountActions.loadAccounts());

    this.accounts$.subscribe(accounts => console.log(accounts));
  }
}
