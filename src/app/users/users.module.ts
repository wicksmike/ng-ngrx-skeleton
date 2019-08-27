import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UsersRoutingModule } from './users-routing.module';
import { UsersListComponent } from './components/users-list/users-list.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { UsersLandingPageComponent } from './containers/users-landing-page/users-landing-page.component';

@NgModule({
  declarations: [UsersListComponent, UsersLandingPageComponent],
  imports: [CommonModule, UsersRoutingModule, MatTableModule, MatPaginatorModule, MatSortModule]
})
export class UsersModule {}
