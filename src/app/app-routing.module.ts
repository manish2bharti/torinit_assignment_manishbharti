// Routing Module: Handle Project Routing
import { SinglePostComponent } from './posts/single-post/single-post.component';
import { SingleAlbumComponent } from './album/single-album/single-album.component';
import { AuthGuard } from './services/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: ':userid/posts',
    loadChildren: () =>
      import('./posts/posts.module').then((m) => m.PostsModule),
    canActivate: [AuthGuard],
  },
  {
    path: ':userid/posts/details/:id',
    component: SinglePostComponent,
  },
  {
    path: ':userid/albums',
    loadChildren: () =>
      import('./album/album.module').then((m) => m.AlbumModule),
    canActivate: [AuthGuard],
  },
  {
    path: ':userid/albums/details/:id',
    component: SingleAlbumComponent,
  },
  {
    path: ':userid/todos',
    loadChildren: () =>
      import('./todo/todo.module').then((m) => m.TodoModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
