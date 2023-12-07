import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { Users } from '../user/users';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  title: string = 'Login From';

  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    clave: new FormControl('', Validators.required)
  })
  constructor(private loginService: LoginService, private router: Router) { }

  onSubmit() {
    this.loginService.login(this.loginForm.value).subscribe({
      next: () => this.router.navigateByUrl('/home'),
      error: () => alert("Please check Credential...!")
    })
  }
}
