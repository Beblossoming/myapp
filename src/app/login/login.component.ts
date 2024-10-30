import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';
  message: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    // Đọc cookie khi khởi tạo
    this.readCookie();
  }

  readCookie() {
    this.http.get('http://localhost:3002/auth/read-cookie', { withCredentials: true }).subscribe((response: any) => {
      this.username = response.username; // Lấy giá trị username từ phản hồi
      if (this.username !== 'Guest') {
        this.message = `Welcome back, ${this.username}!`; // Hiển thị thông điệp chào mừng
      }
    }, error => {
      console.error('Error reading cookies', error);
    });
  }

  login(event: Event) {
    event.preventDefault(); // Ngăn chặn gửi form mặc định
    this.http.post('http://localhost:3002/auth/login', 
      { username: this.username, password: this.password }, // Thay đổi từ name thành username
      { withCredentials: true }
    )
    .subscribe((response: any) => {
      this.message = 'Login successful!';
      this.readCookie();
    }, error => {
      console.error('Error occurred:', error);
      if (error.error) {
        this.message = 'Login failed: ' + error.error;
      } else {
        this.message = 'Login failed: An unexpected error occurred';
      }
    });
  }
  
  
}
