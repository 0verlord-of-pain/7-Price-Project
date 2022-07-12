import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ImagesService } from '../images.service';

@Component({
  selector: 'app-image_pop_up',
  templateUrl: './image_pop_up.component.html',
  styleUrls: ['./image_pop_up.component.scss'],
})
export class ImagePopUpComponent {
  constructor(private imagesService: ImagesService) {}

  @Input() imageInfo;
  @Output() close = new EventEmitter<void>();

  postComment() {
    var textComment = document.querySelector('input')?.value;
    this.imagesService.postComment(this.imageInfo.id, textComment).subscribe();
  }
}
