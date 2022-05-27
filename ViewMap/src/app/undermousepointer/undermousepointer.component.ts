import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-undermousepointer',
  templateUrl: './undermousepointer.component.html',
  styleUrls: ['./undermousepointer.component.css']
})
export class UndermousepointerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    (mapboxgl as typeof mapboxgl).accessToken = 'pk.eyJ1Ijoic2hpdmE2NSIsImEiOiJjbDJyamN6NnoyejkxM2ZvN3d2cHBuaTdvIn0.xWIl2m0q8i7HB-PuVuVWgQ';
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-96, 37.8],
      zoom: 3
    });

    map.on('mousemove', (e) => {
      const features = map.queryRenderedFeatures(e.point);


      // Limit the number of properties we're displaying for
      // legibility and performance
      const displayProperties = [
        'type',
        'properties',
        'id',
        'layer',
        'source',
        'sourceLayer',
        'state'
      ];

      // const displayFeatures = features.map((feat) => {
      //   const displayFeat = {};
      //   displayProperties.forEach((prop) => {
      //     displayFeat[prop] = feat[prop];
      //   });
      //   return displayFeat;
      // });

      // // // Write object as string with an indent of two spaces.
      // document.getElementById('features').innerHTML = JSON.stringify(
      //   displayFeatures,
      //   null,
      //   2
      // );
    });

  }

}
