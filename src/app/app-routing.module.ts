import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CheckUserLoginGuard } from './check-user-login.guard';
import { AboutComponent } from './components/about/about.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: 'login', pathMatch: 'prefix', component: LoginComponent },
  { path: '', pathMatch: 'prefix', component: HomeComponent },
  { path: 'about', pathMatch: 'prefix', component: AboutComponent },
  {
    path: 'media-gallery',
    pathMatch: 'prefix',
    component: GalleryComponent,
    canActivate: [CheckUserLoginGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
