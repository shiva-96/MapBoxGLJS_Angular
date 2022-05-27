import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-newlayer',
  templateUrl: './newlayer.component.html',
  styleUrls: ['./newlayer.component.css']
})
export class NewlayerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    (mapboxgl as typeof mapboxgl).accessToken = 'pk.eyJ1Ijoic2hpdmE2NSIsImEiOiJjbDJyamN6NnoyejkxM2ZvN3d2cHBuaTdvIn0.xWIl2m0q8i7HB-PuVuVWgQ';
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-88.137343, 35.137451],
      zoom: 4
    });

    map.on('load', () => {
      const layers = map.getStyle().layers;
      // Find the index of the first symbol layer in the map style.
      // let firstSymbolId;
      // for (const layer of layers) {
      //   if (layer.type === 'symbol') {
      //     firstSymbolId = layer.id;
      //     break;
      //   }
      // }

      map.addSource('urban-areas', {
        'type': 'geojson',
        'data': 'https://docs.mapbox.com/mapbox-gl-js/assets/ne_50m_urban_areas.geojson'
      });


      map.addLayer(
        {
          'id': 'urban-areas-fill',
          'type': 'fill',
          'source': 'urban-areas',
          'layout': {},
          'paint': {
            'fill-color': 'green',
            'fill-opacity': 0.4
          }
          // This is the important part of this example: the addLayer
          // method takes 2 arguments: the layer as an object, and a string
          // representing another layer's name. If the other layer
          // exists in the style already, the new layer will be positioned
          // right before that layer in the stack, making it possible to put
          // 'overlays' anywhere in the layer stack.
          // Insert the layer beneath the first symbol layer.
        },
        // firstSymbolId
      );


    });
  }


}
