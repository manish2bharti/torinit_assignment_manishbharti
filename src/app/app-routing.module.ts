// import { AlbumModule } from './album/album.module';
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
    path: 'posts',
    loadChildren: () =>
      import('./posts/posts.module').then((m) => m.PostsModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'posts/details/:id',
    component: SinglePostComponent,
  },
  {
    path: 'albums',
    loadChildren: () =>
      import('./album/album.module').then((m) => m.AlbumModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'albums/details/:id',
    component: SingleAlbumComponent,
  },
  {
    path: 'todos',
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
