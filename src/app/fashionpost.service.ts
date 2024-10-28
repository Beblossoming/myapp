import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FashionpostService {

  private apiUrl = 'http://localhost:3002/fashions';

  constructor(private http: HttpClient) {}

  postFashion(aFashion: any): Observable<any> {
    const formData = new FormData();
    formData.append('style', aFashion.style);
    formData.append('fashion_subject', aFashion.fashion_subject);
    formData.append('fashion_detail', aFashion.fashion_detail);
    if (aFashion.fashion_image) {
      const base64Image = aFashion.fashion_image.split(',')[1]; // Lấy phần base64
      const blob = this.b64toBlob(base64Image, 'image/jpeg'); // Chuyển đổi về blob
      formData.append('fashion_image', blob, 'image.jpg'); // Thêm blob vào formData
    }

    return this.http.post<any>(this.apiUrl, formData).pipe(
      retry(3),
      catchError(this.handleError)
    );
  }

  private handleError(error: any): Observable<never> {
    console.error('An error occurred:', error);
    return throwError('Something went wrong; please try again later.');
  }

  private b64toBlob(b64Data: string, contentType: string = '', sliceSize: number = 512) {
    const byteCharacters = atob(b64Data);
    const byteArrays = [];

    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      const slice = byteCharacters.slice(offset, offset + sliceSize);
      const byteNumbers = new Array(slice.length);
      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }
      const byteArray = new Uint8Array(byteNumbers);
      byteArrays.push(byteArray);
    }

    return new Blob(byteArrays, { type: contentType });
  }
}
