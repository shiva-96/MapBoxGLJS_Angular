import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-display-popup',
  templateUrl: './display-popup.component.html',
  styleUrls: ['./display-popup.component.css']
})
export class DisplayPopupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    (mapboxgl as typeof mapboxgl).accessToken = 'pk.eyJ1Ijoic2hpdmE2NSIsImEiOiJjbDJyamN6NnoyejkxM2ZvN3d2cHBuaTdvIn0.xWIl2m0q8i7HB-PuVuVWgQ';
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-96, 37.8],
      zoom: 3
    });

    const popup = new mapboxgl.Popup({ closeOnMove: true })
      .setLngLat([-96, 37.8])
      .setHTML('<h1>Hello World!</h1>')
      .addTo(map);
  }

}
