import { Component } from '@angular/core';
import { MaterialService, Material } from '../../services/material.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-material-list',
  imports: [CommonModule],
  templateUrl: './material-list.component.html',
  styleUrl: './material-list.component.scss'
})
export class MaterialListComponent {

  materials: Material[] = [];

  constructor(private readonly materialService: MaterialService){
    this.materialService.listAll().subscribe({
      next: (res)=>{
        console.log(res);
        this.materials = res;
      }
    });
  }

}
