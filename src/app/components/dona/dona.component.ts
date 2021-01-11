import { Component, Input } from '@angular/core';

import { MultiDataSet, Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent {
  @Input() title: string = 'Sin título';

  @Input( 'labels' ) doughnutChartLabels: Label[] = ['Label 1', 'Label 2', 'Label 3'];
  @Input( 'data' ) doughnutChartData: MultiDataSet = [
    [300, 400, 10]
  ];

  public colors: Color[] = [
    { backgroundColor: [ '#6857E6', '#009FEE', '#F02059' ] }
  ];

}
