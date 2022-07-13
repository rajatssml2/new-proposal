import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  onLogin(formValue: any) {
    console.log(formValue)
    localStorage.setItem('username', formValue.username);
    localStorage.setItem('password', formValue.password);
    
  }
  onLogout() {
    localStorage.removeItem('loginUser');
    localStorage.removeItem('username');
    localStorage.removeItem('password');
    localStorage.removeItem("isLoggedIn");
  }
}
