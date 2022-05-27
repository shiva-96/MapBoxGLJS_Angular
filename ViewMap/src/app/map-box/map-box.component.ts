import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { environment } from 'src/environments/environment';



@Component({
  selector: 'app-map-box',
  templateUrl: './map-box.component.html',
  styleUrls: ['./map-box.component.css']
})





export class MapBoxComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    (mapboxgl as typeof mapboxgl).accessToken = 'pk.eyJ1Ijoic2hpdmE2NSIsImEiOiJjbDJyamN6NnoyejkxM2ZvN3d2cHBuaTdvIn0.xWIl2m0q8i7HB-PuVuVWgQ';

    navigator.geolocation.getCurrentPosition(successLocation, errorLocation, { enableHighAccuracy: true })

    function successLocation(position: any) {
      console.log(position)
      cntLocation([position.coords.longitude, position.coords.latitude])
      // const lngTde  = position.coords.longitude
      // const lTde  = position.coords.latitude

      // console.log(lngTde+ " and " +lTde)
    }

    function errorLocation(position: any) {

      cntLocation([40, 30])

    }

    function cntLocation(center: any) {
      const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: center,
        zoom: 12
      });

    }


  }


}
