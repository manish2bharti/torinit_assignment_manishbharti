import { PostsEffects } from './state/album.effects';
import { EffectsModule } from '@ngrx/effects';
import { ALBUM_STATE_NAME } from './state/album.selector';
import { AlbumListComponent } from './album-list/album-list.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { postsReducer } from './state/album.reducer';
import { SingleAlbumComponent } from './single-album/single-album.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


const routes: Routes = [
  {
    path: '',
    component: AlbumListComponent
  },
];
@NgModule({
  declarations: [AlbumListComponent, SingleAlbumComponent],
  imports: [
    NgbModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(ALBUM_STATE_NAME, postsReducer),
    EffectsModule.forFeature([PostsEffects]),
  ],
})
export class AlbumModule {}
