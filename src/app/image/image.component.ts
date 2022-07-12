import { Component, Input, Output } from '@angular/core';
import { ImagesService } from '../images.service';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss'],
})
export class ImageComponent {
  @Input() image;

  modal = false;

  @Output() imageInfo;

  constructor(private imagesService: ImagesService) {}

  getImageInfo(id: number) {
    this.imagesService.getImageInfo(id).subscribe((imageInfo: any) => {
      this.imageInfo = imageInfo;
    });
  }
}
