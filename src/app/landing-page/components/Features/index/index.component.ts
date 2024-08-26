import { Component } from '@angular/core';
import { featuresData } from './features-data';  // Adjust the path based on your structure
import { Feature } from '../../../../models/feature.model';

@Component({
  selector: 'app-features',
  templateUrl: './index.component.html',
})
export class FeaturesComponent {
  features: Feature[] = featuresData;
}
