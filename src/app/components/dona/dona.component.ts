import { Component,Input, Output, EventEmitter } from '@angular/core';
import { MultiDataSet, Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent {

  // Doughnut
  @Input() title: string = "Sin Titulo";
  @Input('labels') doughnutChartLabels: Label[] = ['Label1', 'Label2', 'Label3'];
  @Input('data') doughnutChartData: MultiDataSet = [
    [350, 450, 100]
  ];

  public colors: Color[] = [
    { backgroundColor: ['#6857E6','#009FEE','#F02059']}
  ]

}
