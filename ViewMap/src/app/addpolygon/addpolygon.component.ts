import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-addpolygon',
  templateUrl: './addpolygon.component.html',
  styleUrls: ['./addpolygon.component.css']
})
export class AddpolygonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    (mapboxgl as typeof mapboxgl).accessToken = 'pk.eyJ1Ijoic2hpdmE2NSIsImEiOiJjbDJyamN6NnoyejkxM2ZvN3d2cHBuaTdvIn0.xWIl2m0q8i7HB-PuVuVWgQ';
    const map = new mapboxgl.Map({
      container: 'map', // container ID
      style: 'mapbox://styles/mapbox/light-v10', // style URL
      center: [74.06021118164062,
        26.182553513299307], // starting position
      zoom: 5 // starting zoom
    });

    
    map.on('load', () => {
      // Add a data source containing GeoJSON data.
      map.addSource('maine', {
        "type": "geojson",
        "data": {
          "type": "FeatureCollection",
          "features": [
            {
              "type": "Feature",
              "properties": {},
              "geometry": {
                "type": "Polygon",
                "coordinates": [
                  [
                    [
                      74.06021118164062,
                      26.182553513299307
                    ],
                    [
                      74.1851806640625,
                      26.01482928993099
                    ],
                    [
                      74.55459594726562,
                      26.059250276921194
                    ],
                    [
                      74.57244873046875,
                      26.154205294151907
                    ],
                    [
                      74.32662963867186,
                      26.242924548142653
                    ],
                    [
                      74.06021118164062,
                      26.182553513299307
                    ]
                  ]
                ]
              }
            },
            {
              "type": "Feature",
              "properties": {},
              "geometry": {
                "type": "Polygon",
                "coordinates": [
                  [
                    [
                      83.82568359375,
                      27.371767300523047
                    ],
                    [
                      83.03466796874999,
                      26.49024045886963
                    ],
                    [
                      82.99072265625,
                      24.54712317973075
                    ],
                    [
                      86.37451171875,
                      24.287026865376436
                    ],
                    [
                      87.73681640625,
                      26.31311263768267
                    ],
                    [
                      83.82568359375,
                      27.371767300523047
                    ]
                  ]
                ]
              }
            }
          ]
        }

      });

      // Add a new layer to visualize the polygon.
      map.addLayer({
        'id': 'maine',
        'type': 'fill',
        'source': 'maine', // reference the data source
        'layout': {},
        'paint': {
          'fill-color': '#0080ff', // blue color fill
          'fill-opacity': 0.5
        }
      });

      // Add a black outline around the polygon.
      map.addLayer({
        'id': 'outline',
        'type': 'line',
        'source': 'maine',
        'layout': {},
        'paint': {
          'line-color': 'yellow',
          'line-width': 3
        }
      });
    });

  }

}
