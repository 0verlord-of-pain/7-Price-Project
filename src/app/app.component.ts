import { Component } from '@angular/core';
import { ImagesService } from './images.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ImagesService],
})
export class AppComponent {
  images: Object[] = [];

  constructor(private imagesService: ImagesService) {}

  ngOnInit() {
    this.imagesService.getImages().subscribe((images: any) => {
      this.images = images;
    });
  }
}
