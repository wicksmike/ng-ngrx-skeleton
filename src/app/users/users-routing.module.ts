import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersLandingPageComponent } from './containers/users-landing-page/users-landing-page.component';

const routes: Routes = [{ path: '', component: UsersLandingPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {}
