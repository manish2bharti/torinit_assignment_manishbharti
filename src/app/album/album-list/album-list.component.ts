// Album list component: show all the album data
import { getAlbums} from './../state/album.selector';
import { Album } from '../../models/albums.model';
import { Observable } from 'rxjs';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'app/store/app.state';
import { loadAlbums } from '../state/album.actions';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SingleAlbumComponent } from '../single-album/single-album.component';

@Component({
  selector: 'app-album-list',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css'],
})
export class AlbumListComponent implements OnInit {
  albums: Observable<Album[]>;
  getUserDetail: Observable<{}>;
  totalPosts;
  activeId;
  queryString = '';
  constructor(private store: Store<AppState>, private modalService: NgbModal) {}

  ngOnInit(): void {
    this.albums = this.store.select(getAlbums);
    this.albums.subscribe(data =>{
      this.totalPosts = data.length
    });
    if(this.totalPosts.length){
      this.activeId = 1;
    }
    this.store.dispatch(loadAlbums());
  }

  openWindowCustomClass(album: Album) {
    const modalRef = this.modalService.open(SingleAlbumComponent, { size: 'xl' });
    modalRef.componentInstance.album = album;
  }
}
