import { Component} from '@angular/core';


@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './graficas1.component.html'
  //styleUrls: ['./grafica1.component.scss']
})
export class Graficas1Component {
 public labels1: string[] = ['Pan', 'Refresco', 'Mani'];
 public data1 = [
  [150, 750, 100]
];
}
