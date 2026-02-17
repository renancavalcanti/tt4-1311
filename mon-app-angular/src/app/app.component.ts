import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from './components/counter/counter.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, CounterComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'mon-app-angular';
  nom = 'Renan';
  imageUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk3z_QQfrb9y31ADFgNzSh6huBsqSj7roBDw&s';
  isLoggedIn = false;
  items = ["Item A", "Item B", "Item C", "Item D", "Item E", "Item F"];
  isActive = false;
  textColor = 'green';
  fontSize = 50;


  clickButton(){
    console.log("Button Clicked");
    this.nom = "Neymar";
    this.imageUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn90qbFky_ftHohEBYJp4mx6SsmcmRziw4Yw&s';
    this.isActive = true;
    this.textColor = 'red';
    this.fontSize--;
  }

  logout(){
    this.isLoggedIn = false;
  }

  login(){
    this.isLoggedIn = true;
  }
}
