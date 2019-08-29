import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Account } from './store/account.model';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {
  constructor() {}

  public mockAccounts: Account[] = [
    { id: 1, name: 'C account 1' },
    { id: 2, name: 'A account 2' },
    { id: 3, name: 'B account 3' }
  ];

  getAccounts(): Observable<Account[]> {
    return of(this.mockAccounts);
  }
}
