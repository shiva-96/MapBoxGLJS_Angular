import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-gradient-sky-layer-map',
  templateUrl: './gradient-sky-layer-map.component.html',
  styleUrls: ['./gradient-sky-layer-map.component.css']
})
export class GradientSkyLayerMapComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    (mapboxgl as typeof mapboxgl).accessToken = 'pk.eyJ1Ijoic2hpdmE2NSIsImEiOiJjbDJyamN6NnoyejkxM2ZvN3d2cHBuaTdvIn0.xWIl2m0q8i7HB-PuVuVWgQ';
    const map = new mapboxgl.Map({
      container: 'map',
      zoom: 14.77,
      center: [127.60597, 35.67283],
      pitch: 83,
      style: 'mapbox://styles/mapbox-map-design/ckhqrf2tz0dt119ny6azh975y'
    });



    map.on('load', () => {
      map.addSource('mapbox-dem', {
        'type': 'raster-dem',
        'url': 'mapbox://mapbox.mapbox-terrain-dem-v1',
        'tileSize': 402,
        'maxzoom': 14
      });
      map.setTerrain({ 'source': 'mapbox-dem', 'exaggeration': 1.5 });

      map.addLayer({
        'id': 'sky',
        'type': 'sky',
        'paint': {
          // set up the sky layer to use a color gradient
          'sky-type': 'gradient',
          // the sky will be lightest in the center and get darker moving radially outward
          // this simulates the look of the sun just below the horizon
          'sky-gradient': [
            'interpolate',
            ['linear'],
            ['sky-radial-progress'],
            0.8,
            'rgba(135, 206, 235, 1.0)',
            1,
            'rgba(0,0,0,0.1)'
          ],
          'sky-gradient-center': [0, 0],
          'sky-gradient-radius': 90,
          'sky-opacity': [
            'interpolate',
            ['exponential', 0.1],
            ['zoom'],
            5,
            0,
            22,
            1
          ],

        }
      });
    });
  }

}
