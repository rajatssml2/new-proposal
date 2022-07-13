import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {UserService} from '../_services/user.service';
import {Router} from '@angular/router'
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: any = FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', [Validators.required]]
    });
  }
  onLogin(form: FormGroup) {
    if(!form.valid) return;
    let obj = {
      username: form.value.username,
      password: form.value.password
    }
    

    if(obj.username=='state_officer' && obj.password=='123456') {
      this.userService.onLogin(obj);
      localStorage.setItem("isLoggedIn", 'true');
      localStorage.setItem('loginUser', 'state_officer');
      this.router.navigate(['/dashboard'])
    } else if(obj.username=='state_manager' && obj.password=='123456') {
      this.userService.onLogin(obj);
      localStorage.setItem("isLoggedIn", 'true');
      localStorage.setItem('loginUser', 'state_manager');
      this.router.navigate(['/dashboard'])
    } else if(obj.username=='morth_manager' && obj.password=='123456') {
      this.userService.onLogin(obj);
      localStorage.setItem("isLoggedIn", 'true');
      localStorage.setItem('loginUser', 'morth_manager');
      this.router.navigate(['/dashboard'])
    }
    else if(obj.username=='iva' && obj.password=='123456') {
      this.userService.onLogin(obj);
      localStorage.setItem("isLoggedIn", 'true');
      localStorage.setItem('loginUser', 'iva');
      this.router.navigate(['/dashboard'])
    }else {
      Swal.fire("", "Invalid credential", "info");
    }

    
  }

}
