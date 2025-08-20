import { Component, OnInit } from '@angular/core';
import { MenuService } from './menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menuItems: any[] = [];   // agar backend se object aa raha hai toh string[] mat do

  constructor(private menuService: MenuService) {}

  ngOnInit(): void {
    this.menuService.getMenu().subscribe({
      next: (data) => {
        this.menuItems = data;
      },
      error: (err) => {
        console.error('Error fetching menu items:', err);
      }
    });
  }
}
