import { Component, OnInit } from '@angular/core';
import { FashionAPIService } from '../fashion-api.service';

@Component({
  selector: 'app-fashion',
  templateUrl: './fashion.component.html',
  styleUrls: ['./fashion.component.css']
})
export class FashionComponent implements OnInit {
  fashions: any = [];
  errMessage: string = '';

  constructor(private _service: FashionAPIService) {}

  ngOnInit() {
    this._service.getFashions().subscribe({
      next: (data) => {
        this.fashions = data;
        console.log('Data loaded successfully:', this.fashions); // Kiểm tra dữ liệu
      },
      error: (err) => {
        this.errMessage = err.message || 'Unknown error';
        console.error('Error loading data:', err); // Log lỗi
      }
    });
  }
}