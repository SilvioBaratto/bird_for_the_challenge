import { Component, OnInit } from '@angular/core';
import { BrandService } from '../../../../services/brand.service';
import { Brand } from '../../../../models/brand.model';

@Component({
  selector: 'app-brand-list',
  templateUrl: './brands-data.component.html',
})
export class BrandListComponent implements OnInit {
  brands: Brand[] = [];

  constructor(private brandService: BrandService) {}

  ngOnInit(): void {
    this.brands = this.brandService.getBrands();
  }
}
