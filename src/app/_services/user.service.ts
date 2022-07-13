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
    if(formValue.username=='admin1' && formValue.password=='123456') {
      localStorage.setItem('isAdmin1', 'true');
    }
    if(formValue.username=='admin2' && formValue.password=='123456') {
      localStorage.setItem('isAdmin2', 'true');
    }
  }
  onLogout() {
    localStorage.removeItem('isAdmin2');
    localStorage.removeItem('isAdmin1');
    localStorage.removeItem('username');
    localStorage.removeItem('password');
  }
}
