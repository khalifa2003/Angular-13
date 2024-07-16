import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.css'],
})
export class ImageGalleryComponent implements OnInit {
  @Input() gallery: any;
  currentImage: String = '';
  constructor() {}

  ngOnInit(): void {
    this.currentImage = this.gallery[0];
  }
  changeImage(imageSrc: string) {
    this.currentImage = imageSrc;
  }
}
