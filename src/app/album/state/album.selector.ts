import { RouterStateUrl } from './../../store/router/custom-serializer';
import { getCurrentRoute } from './../../store/router/router.selector';
import { albumsAdapter, AlbumsState } from './album.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const ALBUM_STATE_NAME = 'albums';
const getAlbumsState = createFeatureSelector<AlbumsState>(ALBUM_STATE_NAME);
export const albumsSelectors = albumsAdapter.getSelectors();

export const getAlbums = createSelector(getAlbumsState, albumsSelectors.selectAll);
export const getAlbumEntities = createSelector(
  getAlbumsState,
  albumsSelectors.selectEntities
);

export const getPostById = createSelector(
  getAlbumEntities,
  getCurrentRoute,
  (albums, route: RouterStateUrl) => {
    return albums ? albums[route.params['id']] : null;
  }
);

