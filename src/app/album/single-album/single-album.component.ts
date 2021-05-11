// Single Album component: show the selected album data
import { Album } from '../../models/albums.model';
import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-single-album',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './single-album.component.html',
  styleUrls: ['./single-album.component.css'],
})
export class SingleAlbumComponent implements OnInit {
  @Input() album: Album;
  constructor(public activeModal: NgbActiveModal) {
  }

  ngOnInit(): void {
    console.log(this.album)
  }
}
