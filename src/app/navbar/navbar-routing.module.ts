import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from '../profile/profile.component';
import { ExperienceComponent } from '../experience/experience.component';

const routes: Routes = [
    {path: 'profile', component: ProfileComponent},
    {path: 'experience', component: ExperienceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class NavbarRoutingModule { }
