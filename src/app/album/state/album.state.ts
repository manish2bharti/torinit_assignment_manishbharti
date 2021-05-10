import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { Album } from '../../models/albums.model';

export interface AlbumsState extends EntityState<Album> {
  count: number;
}

export const albumsAdapter = createEntityAdapter<Album>({
 sortComparer: sortByName,
});

export const initialState: AlbumsState = albumsAdapter.getInitialState({
  count: 0,
});

export function sortByName(a: Album, b: Album): number {
  const compare = a.title.localeCompare(b.title);
  // if (compare > 0) {
  //   return -1;
  // }

  // if (compare < 0) {
  //   return 1;
  // }

  return compare;
}
