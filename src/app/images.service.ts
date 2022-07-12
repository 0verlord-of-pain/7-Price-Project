import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BackEnd_Base_Domain } from 'src/env';

@Injectable()
export class ImagesService {
  constructor(private http: HttpClient) {}

  getImages() {
    return this.http.get(BackEnd_Base_Domain + 'images');
  }

  getImageInfo(imageId) {
    return this.http.get(BackEnd_Base_Domain + 'images/' + imageId);
  }

  postComment(imageId: number, textComment) {
    console.log(imageId);
    console.log(textComment);

    const body = { name: 'Default User', comment: textComment };

    console.log(body);

    return this.http.post(
      BackEnd_Base_Domain + 'images/' + imageId + '/comments',
      body
    );
  }
}
