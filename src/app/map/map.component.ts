import {Component, AfterViewInit} from '@angular/core';

import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements AfterViewInit {
  private map: any;


  private initMap(): void {
     this.map = L.map('map').setView([-37.7738026,144.9836466], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.de/{z}/{x}/{y}.png', {
      maxZoom: 18,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);

    L.marker([-37.7738026,144.9836466]).addTo(this.map);
    L.marker([-37.8618349,144.905716]).addTo(this.map);
    L.marker([-37.8158343,145.04645]).addTo(this.map);
  }

  constructor() {
  }

  ngAfterViewInit(): void {
    this.initMap();
  }

}
