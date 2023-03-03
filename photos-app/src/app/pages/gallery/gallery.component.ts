import { Component } from '@angular/core';
import { PhotosService } from 'src/app/services/photos.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
})
export class GalleryComponent {
  photos: string[] = [];

  constructor(private photoService: PhotosService) {
    this.photos = this.photoService.photos;
  }

  async takePhoto() {
    await this.photoService.addNewPhoto();
  }
}
