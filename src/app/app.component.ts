import { Component } from '@angular/core';
import {Order} from "./model/Order";
import {NetPoint} from "./model/NetPoint";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BachelorClient';

  netPoints: NetPoint[] = [];
  orders: Order[] = [];

}
