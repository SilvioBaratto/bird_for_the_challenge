import { Component, OnInit } from '@angular/core';
import { MenuDataService, Menu } from '../../../../services/menu-data.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu-data.component.html',
})
export class MenuComponent implements OnInit {
  menuData: Menu[] = [];

  constructor(private menuDataService: MenuDataService) {}

  ngOnInit(): void {
    this.menuData = this.menuDataService.getMenuData();
  }

  toggleSubmenu(index: number): void {
    // Logic to toggle submenu if needed
  }
}
