import { Component, Input, OnInit } from '@angular/core';
import { Brand } from '../../../../models/brand.model';
import { DarkModeService } from '../../../../services/dark-mode.service';

@Component({
  selector: 'app-single-brand',
  templateUrl: './index.component.html',
})
export class SingleBrandComponent implements OnInit {
  @Input() brand!: Brand;
  isDarkMode: boolean = false;

  constructor(private darkModeService: DarkModeService) {}

  ngOnInit(): void {
    this.isDarkMode = this.darkModeService.isDarkMode();
  }
}
