// Album anf AlbumPhotos interface
export interface Album {
  id?: string;
  title: string;
  description: string;
  photos: any;
}

export interface AlbumPhotos {
  albumId?: string;
  id?: string;
  title: string;
  url: string;
  thumbnailUrl: string;
}
