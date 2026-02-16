import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  email = '';
  password = '';
  errorMessage = '';

  constructor(
    private readonly auth: AuthService,
    private readonly router: Router
  ){}

  submit(){
    this.auth.login(this.email, this.password).subscribe({
      next: (res)=>{
        console.log(res);
        this.router.navigate(['/materials'])
      },
      error: (err)=>{
        console.log(err);
        this.errorMessage = "Invalid Credentials!"
      }
    });
  }
}
