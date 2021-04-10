import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { PostComponent } from './components/post/post.component';

const routes: Routes = [
  { path: 'login', pathMatch: 'prefix', component: LoginComponent },
  { path: 'posts', pathMatch: 'prefix', component: PostComponent },
  { path: 'posts/:id', component: PostDetailComponent },
  { path: '', redirectTo: 'posts', pathMatch: 'prefix' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
