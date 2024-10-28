import { Component } from '@angular/core';
import { FashionpostService } from '../fashionpost.service';
import { Fashion } from '../models/fashion';

@Component({
  selector: 'app-fashionpost',
  templateUrl: './fashionpost.component.html',
  styleUrls: ['./fashionpost.component.css'] // Fix typo from 'styleUrl' to 'styleUrls'
})
export class FashionpostComponent {
  fashion = new Fashion();
  errMessage: string = '';

  constructor(private _service: FashionpostService) {}

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.fashion.fashion_image = reader.result!.toString();
      };
      reader.onerror = (error) => {
        console.log('Error: ', error);
      };
    }
  }

  postFashion() {
    this._service.postFashion(this.fashion).subscribe({
      next: (data) => {
        this.fashion = data;
      },
      error: (err) => {
        this.errMessage = err;
      }
    });
  }
}
