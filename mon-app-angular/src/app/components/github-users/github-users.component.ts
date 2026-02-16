import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GithubService } from '../../services/github.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-github-users',
  imports: [FormsModule, CommonModule],
  templateUrl: './github-users.component.html',
  styleUrl: './github-users.component.scss'
})
export class GithubUsersComponent {

  username = '';
  catFact = '';
  userData: any = null;
  errorMessage = '';

  constructor(private githubService: GithubService){
    //console.log(this.githubService.getCatFact());
    this.githubService.getCatFact().subscribe({
      next: (data)=>{
        console.log(data.data[0]);
        this.catFact = data.data[0];
      }
    });
  }

  searchUser(){
    console.log(this.username);

    this.githubService.getUser(this.username).subscribe({
      next: (data)=>{
        this.userData = data;
        this.errorMessage = '';
      },
      error: (error)=>{
        console.log(error.error.message)
        //this.errorMessage = 'User pas Trouve!';
        this.errorMessage = error.error.message;
        this.userData = null;
      }
    });
  }

}
