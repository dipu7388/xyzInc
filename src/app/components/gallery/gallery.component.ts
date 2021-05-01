import { Component, OnInit } from '@angular/core';
import { FakeDataService } from 'src/app/services/fake-data.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
  medias: { image: string; title: string }[] = [];

  constructor(private fakeData: FakeDataService) {
    this.loadMore();
  }

  ngOnInit(): void {}
  /**
   * get random number of media in range of 1-41;
   * push in current list.
   */
  loadMore() {
    let data = this.fakeData.mediaImages(Math.ceil(Math.random() * 40) + 1);
    this.medias.push(...data);
  }
}
