import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, retry, throwError } from 'rxjs';
import { Fashion } from './models/fashion';  // Giả sử bạn đã có model Fashion

@Injectable({
  providedIn: 'root'
})
export class FashionAPIService {
  private baseUrl = 'http://localhost:3002/fashions';  // Đảm bảo rằng baseUrl trỏ đúng tới API server của bạn

  constructor(private _http: HttpClient) { }

  // Hàm gọi API để lấy danh sách thời trang từ MongoDB
  getFashions(): Observable<any> {
    const headers = new HttpHeaders().set("Content-Type", "application/json");
    return this._http.get<any>(this.baseUrl, { headers }).pipe(
      map(res => res as Array<Fashion>),
      retry(3),
      catchError(this.handleError)
    );
  }

  // Hàm xử lý lỗi chung cho API
  private handleError(error: HttpErrorResponse) {
    let errorMessage = '';

    // Kiểm tra lỗi nếu là lỗi phía client hay phía server
    if (error.error instanceof ErrorEvent) {
      // Lỗi xảy ra khi client hoặc mạng gặp vấn đề
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Lỗi xảy ra từ server (HTTP status)
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }

    // Log lỗi (có thể chuyển đến console hoặc UI tùy ý)
    console.error(errorMessage);
    return throwError(() => new Error(errorMessage));
  }
}
