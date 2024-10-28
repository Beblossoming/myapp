import { Component } from '@angular/core';
import {FashiondetailService} from '../fashiondetail.service';

@Component({
  selector: 'app-fashiondetail',
  templateUrl: './fashiondetail.component.html',
  styleUrls: ['./fashiondetail.component.css']
})
export class FashiondetailComponent {
  fashionId: string = '';
  fashion: any;

  constructor(private fashionService: FashiondetailService) {}

  getFashionDetail() {
    if (this.fashionId) {
      this.fashionService.getFashionById(this.fashionId).subscribe(
        data => {
          this.fashion = data;
        },
        error => {
          console.error('Error fetching fashion details:', error);
        }
      );
    }
  }
}
