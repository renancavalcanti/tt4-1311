import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signup',
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  name = '';
  email = '';
  password = '';
  program = '';
  errorMessage = '';

  constructor(
    private readonly authService: AuthService,
    private readonly router: Router
  ){}

  submit(){
    this.authService.signup(this.email, this.email, this.password, this.program).subscribe({
      next: ()=>{
        this.router.navigate(['/login'])
      },
      error: (err)=>{
        console.log(err);
        this.errorMessage = err.error.error;
      }
    });
  }
}
