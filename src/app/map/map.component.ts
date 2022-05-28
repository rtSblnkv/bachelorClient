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
     this.map = L.map('map').setView([53.211772885475156, 50.17729037818708], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.de/{z}/{x}/{y}.png', {
      maxZoom: 18,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);

    L.marker([53.211772885475156, 50.17729037818708]).addTo(this.map);
    L.marker([53.201107707748605, 50.10843173214648]).addTo(this.map);
  }

  constructor() {
  }

  ngAfterViewInit(): void {
    this.initMap();
  }

}
