import { Component, OnInit } from '@angular/core';
import { NgControlStatus } from '@angular/forms';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-distance-measure',
  templateUrl: './distance-measure.component.html',
  styleUrls: ['./distance-measure.component.css']
})
export class DistanceMeasureComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    (mapboxgl as typeof mapboxgl).accessToken = 'pk.eyJ1Ijoic2hpdmE2NSIsImEiOiJjbDJyamN6NnoyejkxM2ZvN3d2cHBuaTdvIn0.xWIl2m0q8i7HB-PuVuVWgQ';
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [78.43330469444444, 14.014506666666666],
      zoom: 12
    });

    const distanceContainer = document.getElementById('distance');

    // GeoJSON object to hold our measurement features
    const geojson = {
      'type': 'FeatureCollection',
      // 'features': [{ "type": "Feature", "geometry": { "type": "Point", "coordinates": [78.43330469444444, 14.014506666666666, 386.28] }, "properties": { "file_name": "1 (1).JPG", "created_time": "2022:02:27 15:03:03", "modified_time": "2022:02:27 15:03:03" } }, { "type": "Feature", "geometry": { "type": "Point", "coordinates": [78.43367730555556, 14.01450713888889, 386.469] }, "properties": { "file_name": "1 (10).JPG", "created_time": "2022:02:27 15:03:25", "modified_time": "2022:02:27 15:03:25" } }, { "type": "Feature", "geometry": { "type": "Point", "coordinates": [78.43371919444445, 14.014507166666666, 386.416] }, "properties": { "file_name": "1 (11).JPG", "created_time": "2022:02:27 15:03:28", "modified_time": "2022:02:27 15:03:28" } }, { "type": "Feature", "geometry": { "type": "Point", "coordinates": [78.43376086111111, 14.014506361111112, 386.667] }, "properties": { "file_name": "1 (12).JPG", "created_time": "2022:02:27 15:03:31", "modified_time": "2022:02:27 15:03:31" } }, { "type": "Feature", "geometry": { "type": "Point", "coordinates": [78.43384466666667, 14.014506222222222, 386.436] }, "properties": { "file_name": "1 (13).JPG", "created_time": "2022:02:27 15:03:35", "modified_time": "2022:02:27 15:03:35" } }, { "type": "Feature", "geometry": { "type": "Point", "coordinates": [78.43388602777779, 14.014507222222223, 386.417] }, "properties": { "file_name": "1 (14).JPG", "created_time": "2022:02:27 15:03:38", "modified_time": "2022:02:27 15:03:38" } }, { "type": "Feature", "geometry": { "type": "Point", "coordinates": [78.43392786111112, 14.01450686111111, 386.354] }, "properties": { "file_name": "1 (15).JPG", "created_time": "2022:02:27 15:03:40", "modified_time": "2022:02:27 15:03:40" } }, { "type": "Feature", "geometry": { "type": "Point", "coordinates": [78.4339696388889, 14.014506333333333, 386.393] }, "properties": { "file_name": "1 (16).JPG", "created_time": "2022:02:27 15:03:43", "modified_time": "2022:02:27 15:03:43" } }, { "type": "Feature", "geometry": { "type": "Point", "coordinates": [78.43401080555556, 14.014507055555555, 386.365] }, "properties": { "file_name": "1 (17).JPG", "created_time": "2022:02:27 15:03:45", "modified_time": "2022:02:27 15:03:45" } }, { "type": "Feature", "geometry": { "type": "Point", "coordinates": [78.43405213888889, 14.01450736111111, 386.311] }, "properties": { "file_name": "1 (18).JPG", "created_time": "2022:02:27 15:03:48", "modified_time": "2022:02:27 15:03:48" } }, { "type": "Feature", "geometry": { "type": "Point", "coordinates": [78.43409497222223, 14.014507583333334, 386.307] }, "properties": { "file_name": "1 (19).JPG", "created_time": "2022:02:27 15:03:50", "modified_time": "2022:02:27 15:03:50" } }, { "type": "Feature", "geometry": { "type": "Point", "coordinates": [78.43334505555556, 14.014507055555555, 386.288] }, "properties": { "file_name": "1 (2).JPG", "created_time": "2022:02:27 15:03:05", "modified_time": "2022:02:27 15:03:05" } }, { "type": "Feature", "geometry": { "type": "Point", "coordinates": [78.43413641666668, 14.014507055555555, 386.35] }, "properties": { "file_name": "1 (20).JPG", "created_time": "2022:02:27 15:03:53", "modified_time": "2022:02:27 15:03:53" } }, { "type": "Feature", "geometry": { "type": "Point", "coordinates": [78.4341778888889, 14.014506777777777, 386.381] }, "properties": { "file_name": "1 (21).JPG", "created_time": "2022:02:27 15:03:55", "modified_time": "2022:02:27 15:03:55" } }, { "type": "Feature", "geometry": { "type": "Point", "coordinates": [78.43421919444445, 14.01450713888889, 386.345] }, "properties": { "file_name": "1 (22).JPG", "created_time": "2022:02:27 15:03:58", "modified_time": "2022:02:27 15:03:58" } }, { "type": "Feature", "geometry": { "type": "Point", "coordinates": [78.4342611388889, 14.014506888888889, 386.34] }, "properties": { "file_name": "1 (23).JPG", "created_time": "2022:02:27 15:04:00", "modified_time": "2022:02:27 15:04:00" } }, { "type": "Feature", "geometry": { "type": "Point", "coordinates": [78.4343023888889, 14.014506916666667, 386.266] }, "properties": { "file_name": "1 (24).JPG", "created_time": "2022:02:27 15:04:03", "modified_time": "2022:02:27 15:04:03" } }, { "type": "Feature", "geometry": { "type": "Point", "coordinates": [78.43434463888889, 14.014507416666667, 386.362] }, "properties": { "file_name": "1 (25).JPG", "created_time": "2022:02:27 15:04:06", "modified_time": "2022:02:27 15:04:06" } }, { "type": "Feature", "geometry": { "type": "Point", "coordinates": [78.43442747222223, 14.014508, 386.355] }, "properties": { "file_name": "1 (26).JPG", "created_time": "2022:02:27 15:04:10", "modified_time": "2022:02:27 15:04:10" } }, { "type": "Feature", "geometry": { "type": "Point", "coordinates": [78.43446902777778, 14.014507666666667, 386.319] }, "properties": { "file_name": "1 (27).JPG", "created_time": "2022:02:27 15:04:13", "modified_time": "2022:02:27 15:04:13" } }, { "type": "Feature", "geometry": { "type": "Point", "coordinates": [78.43451058333333, 14.01450788888889, 386.311] }, "properties": { "file_name": "1 (28).JPG", "created_time": "2022:02:27 15:04:15", "modified_time": "2022:02:27 15:04:15" } }, { "type": "Feature", "geometry": { "type": "Point", "coordinates": [78.43455269444445, 14.01450736111111, 386.293] }, "properties": { "file_name": "1 (29).JPG", "created_time": "2022:02:27 15:04:18", "modified_time": "2022:02:27 15:04:18" } }, { "type": "Feature", "geometry": { "type": "Point", "coordinates": [78.43338638888889, 14.014506305555555, 386.352] }, "properties": { "file_name": "1 (3).JPG", "created_time": "2022:02:27 15:03:08", "modified_time": "2022:02:27 15:03:08" } }, { "type": "Feature", "geometry": { "type": "Point", "coordinates": [78.43459402777778, 14.014507166666666, 386.309] }, "properties": { "file_name": "1 (30).JPG", "created_time": "2022:02:27 15:04:20", "modified_time": "2022:02:27 15:04:20" } }, { "type": "Feature", "geometry": { "type": "Point", "coordinates": [78.43326905555556, 14.014504583333334, 386.245] }, "properties": { "file_name": "1 (31).JPG", "created_time": "2022:02:27 15:03:01", "modified_time": "2022:02:27 15:03:01" } }, { "type": "Feature", "geometry": { "type": "Point", "coordinates": [78.43342752777778, 14.014506194444444, 386.386] }, "properties": { "file_name": "1 (4).JPG", "created_time": "2022:02:27 15:03:10", "modified_time": "2022:02:27 15:03:10" } }, { "type": "Feature", "geometry": { "type": "Point", "coordinates": [78.4334695, 14.014506194444444, 386.225] }, "properties": { "file_name": "1 (5).JPG", "created_time": "2022:02:27 15:03:13", "modified_time": "2022:02:27 15:03:13" } }, { "type": "Feature", "geometry": { "type": "Point", "coordinates": [78.43351100000001, 14.014507416666667, 386.243] }, "properties": { "file_name": "1 (6).JPG", "created_time": "2022:02:27 15:03:15", "modified_time": "2022:02:27 15:03:15" } }, { "type": "Feature", "geometry": { "type": "Point", "coordinates": [78.4335521388889, 14.014507972222223, 386.221] }, "properties": { "file_name": "1 (7).JPG", "created_time": "2022:02:27 15:03:18", "modified_time": "2022:02:27 15:03:18" } }, { "type": "Feature", "geometry": { "type": "Point", "coordinates": [78.43359391666667, 14.014508083333334, 386.295] }, "properties": { "file_name": "1 (8).JPG", "created_time": "2022:02:27 15:03:20", "modified_time": "2022:02:27 15:03:20" } }, { "type": "Feature", "geometry": { "type": "Point", "coordinates": [78.43363577777778, 14.014507722222222, 386.43] }, "properties": { "file_name": "1 (9).JPG", "created_time": "2022:02:27 15:03:23", "modified_time": "2022:02:27 15:03:23" } }]
      'features': []
    };

    // Used to draw a line between points
    const linestring = {
      'type': 'Feature',
      'geometry': {
        'type': 'LineString',
        'coordinates': []
      }
    };

    map.on('load', () => {
      map.addSource('geojson', {
        'type': 'geojson',
        'data': { "type": "FeatureCollection", "features": [{ "type": "Feature", "geometry": { "type": "Point", "coordinates": [78.43330469444444, 14.014506666666666, 386.28] }, "properties": { "file_name": "1 (1).JPG", "created_time": "2022:02:27 15:03:03", "modified_time": "2022:02:27 15:03:03" } }, { "type": "Feature", "geometry": { "type": "Point", "coordinates": [78.43367730555556, 14.01450713888889, 386.469] }, "properties": { "file_name": "1 (10).JPG", "created_time": "2022:02:27 15:03:25", "modified_time": "2022:02:27 15:03:25" } }, { "type": "Feature", "geometry": { "type": "Point", "coordinates": [78.43371919444445, 14.014507166666666, 386.416] }, "properties": { "file_name": "1 (11).JPG", "created_time": "2022:02:27 15:03:28", "modified_time": "2022:02:27 15:03:28" } }, { "type": "Feature", "geometry": { "type": "Point", "coordinates": [78.43376086111111, 14.014506361111112, 386.667] }, "properties": { "file_name": "1 (12).JPG", "created_time": "2022:02:27 15:03:31", "modified_time": "2022:02:27 15:03:31" } }, { "type": "Feature", "geometry": { "type": "Point", "coordinates": [78.43384466666667, 14.014506222222222, 386.436] }, "properties": { "file_name": "1 (13).JPG", "created_time": "2022:02:27 15:03:35", "modified_time": "2022:02:27 15:03:35" } }, { "type": "Feature", "geometry": { "type": "Point", "coordinates": [78.43388602777779, 14.014507222222223, 386.417] }, "properties": { "file_name": "1 (14).JPG", "created_time": "2022:02:27 15:03:38", "modified_time": "2022:02:27 15:03:38" } }, { "type": "Feature", "geometry": { "type": "Point", "coordinates": [78.43392786111112, 14.01450686111111, 386.354] }, "properties": { "file_name": "1 (15).JPG", "created_time": "2022:02:27 15:03:40", "modified_time": "2022:02:27 15:03:40" } }, { "type": "Feature", "geometry": { "type": "Point", "coordinates": [78.4339696388889, 14.014506333333333, 386.393] }, "properties": { "file_name": "1 (16).JPG", "created_time": "2022:02:27 15:03:43", "modified_time": "2022:02:27 15:03:43" } }, { "type": "Feature", "geometry": { "type": "Point", "coordinates": [78.43401080555556, 14.014507055555555, 386.365] }, "properties": { "file_name": "1 (17).JPG", "created_time": "2022:02:27 15:03:45", "modified_time": "2022:02:27 15:03:45" } }, { "type": "Feature", "geometry": { "type": "Point", "coordinates": [78.43405213888889, 14.01450736111111, 386.311] }, "properties": { "file_name": "1 (18).JPG", "created_time": "2022:02:27 15:03:48", "modified_time": "2022:02:27 15:03:48" } }, { "type": "Feature", "geometry": { "type": "Point", "coordinates": [78.43409497222223, 14.014507583333334, 386.307] }, "properties": { "file_name": "1 (19).JPG", "created_time": "2022:02:27 15:03:50", "modified_time": "2022:02:27 15:03:50" } }, { "type": "Feature", "geometry": { "type": "Point", "coordinates": [78.43334505555556, 14.014507055555555, 386.288] }, "properties": { "file_name": "1 (2).JPG", "created_time": "2022:02:27 15:03:05", "modified_time": "2022:02:27 15:03:05" } }, { "type": "Feature", "geometry": { "type": "Point", "coordinates": [78.43413641666668, 14.014507055555555, 386.35] }, "properties": { "file_name": "1 (20).JPG", "created_time": "2022:02:27 15:03:53", "modified_time": "2022:02:27 15:03:53" } }, { "type": "Feature", "geometry": { "type": "Point", "coordinates": [78.4341778888889, 14.014506777777777, 386.381] }, "properties": { "file_name": "1 (21).JPG", "created_time": "2022:02:27 15:03:55", "modified_time": "2022:02:27 15:03:55" } }, { "type": "Feature", "geometry": { "type": "Point", "coordinates": [78.43421919444445, 14.01450713888889, 386.345] }, "properties": { "file_name": "1 (22).JPG", "created_time": "2022:02:27 15:03:58", "modified_time": "2022:02:27 15:03:58" } }, { "type": "Feature", "geometry": { "type": "Point", "coordinates": [78.4342611388889, 14.014506888888889, 386.34] }, "properties": { "file_name": "1 (23).JPG", "created_time": "2022:02:27 15:04:00", "modified_time": "2022:02:27 15:04:00" } }, { "type": "Feature", "geometry": { "type": "Point", "coordinates": [78.4343023888889, 14.014506916666667, 386.266] }, "properties": { "file_name": "1 (24).JPG", "created_time": "2022:02:27 15:04:03", "modified_time": "2022:02:27 15:04:03" } }, { "type": "Feature", "geometry": { "type": "Point", "coordinates": [78.43434463888889, 14.014507416666667, 386.362] }, "properties": { "file_name": "1 (25).JPG", "created_time": "2022:02:27 15:04:06", "modified_time": "2022:02:27 15:04:06" } }, { "type": "Feature", "geometry": { "type": "Point", "coordinates": [78.43442747222223, 14.014508, 386.355] }, "properties": { "file_name": "1 (26).JPG", "created_time": "2022:02:27 15:04:10", "modified_time": "2022:02:27 15:04:10" } }, { "type": "Feature", "geometry": { "type": "Point", "coordinates": [78.43446902777778, 14.014507666666667, 386.319] }, "properties": { "file_name": "1 (27).JPG", "created_time": "2022:02:27 15:04:13", "modified_time": "2022:02:27 15:04:13" } }, { "type": "Feature", "geometry": { "type": "Point", "coordinates": [78.43451058333333, 14.01450788888889, 386.311] }, "properties": { "file_name": "1 (28).JPG", "created_time": "2022:02:27 15:04:15", "modified_time": "2022:02:27 15:04:15" } }, { "type": "Feature", "geometry": { "type": "Point", "coordinates": [78.43455269444445, 14.01450736111111, 386.293] }, "properties": { "file_name": "1 (29).JPG", "created_time": "2022:02:27 15:04:18", "modified_time": "2022:02:27 15:04:18" } }, { "type": "Feature", "geometry": { "type": "Point", "coordinates": [78.43338638888889, 14.014506305555555, 386.352] }, "properties": { "file_name": "1 (3).JPG", "created_time": "2022:02:27 15:03:08", "modified_time": "2022:02:27 15:03:08" } }, { "type": "Feature", "geometry": { "type": "Point", "coordinates": [78.43459402777778, 14.014507166666666, 386.309] }, "properties": { "file_name": "1 (30).JPG", "created_time": "2022:02:27 15:04:20", "modified_time": "2022:02:27 15:04:20" } }, { "type": "Feature", "geometry": { "type": "Point", "coordinates": [78.43326905555556, 14.014504583333334, 386.245] }, "properties": { "file_name": "1 (31).JPG", "created_time": "2022:02:27 15:03:01", "modified_time": "2022:02:27 15:03:01" } }, { "type": "Feature", "geometry": { "type": "Point", "coordinates": [78.43342752777778, 14.014506194444444, 386.386] }, "properties": { "file_name": "1 (4).JPG", "created_time": "2022:02:27 15:03:10", "modified_time": "2022:02:27 15:03:10" } }, { "type": "Feature", "geometry": { "type": "Point", "coordinates": [78.4334695, 14.014506194444444, 386.225] }, "properties": { "file_name": "1 (5).JPG", "created_time": "2022:02:27 15:03:13", "modified_time": "2022:02:27 15:03:13" } }, { "type": "Feature", "geometry": { "type": "Point", "coordinates": [78.43351100000001, 14.014507416666667, 386.243] }, "properties": { "file_name": "1 (6).JPG", "created_time": "2022:02:27 15:03:15", "modified_time": "2022:02:27 15:03:15" } }, { "type": "Feature", "geometry": { "type": "Point", "coordinates": [78.4335521388889, 14.014507972222223, 386.221] }, "properties": { "file_name": "1 (7).JPG", "created_time": "2022:02:27 15:03:18", "modified_time": "2022:02:27 15:03:18" } }, { "type": "Feature", "geometry": { "type": "Point", "coordinates": [78.43359391666667, 14.014508083333334, 386.295] }, "properties": { "file_name": "1 (8).JPG", "created_time": "2022:02:27 15:03:20", "modified_time": "2022:02:27 15:03:20" } }, { "type": "Feature", "geometry": { "type": "Point", "coordinates": [78.43363577777778, 14.014507722222222, 386.43] }, "properties": { "file_name": "1 (9).JPG", "created_time": "2022:02:27 15:03:23", "modified_time": "2022:02:27 15:03:23" } }] }
        // 'data' : geojson
      });


      // Add styles to the map
      map.addLayer({
        id: 'measure-points',
        type: 'circle',
        source: 'geojson',
        paint: {
          'circle-radius': 5,
          'circle-color': 'yellow'
        },
        filter: ['in', '$type', 'Point']
      });
      map.addLayer({
        id: 'measure-lines',
        type: 'line',
        source: 'geojson',
        layout: {
          'line-cap': 'round',
          'line-join': 'round'
        },
        paint: {
          'line-color': 'yellow',
          'line-width': 2.5
        },
        filter: ['in', '$type', 'LineString']
      });



      map.on('click', (e) => {
        const features = map.queryRenderedFeatures(e.point)
        // , {
        // layers: ['measure-points']
        // });

        // Remove the linestring from the group
        // so we can redraw it based on the points collection.
        if (geojson.features.length > 1) geojson.features.pop();

        // Clear the distance container to populate it with a new value.

        distanceContainer?.remove

        // If a feature was clicked, remove it from the map.
        // if (features.length) {
        //   const id = features[0].properties.id;
        //   geojson.features = geojson.features.filter(
        //     (point) => point.properties.id !== id
        //   );
        // } else {
        const point = {
          'type': 'Feature',
          'geometry': {
            'type': 'Point',
            'coordinates': [e.lngLat.lng, e.lngLat.lat]
          },
          'properties': {
            'id': String(new Date().getTime())
          }
        };

        // geojson.features.push(point);
        // }

        // if (geojson.features.length > 1) {
        //   linestring.geometry.coordinates = geojson.features.map(
        //     (point) => point.geometry.coordinates
        //   );

        //   geojson.features.push(linestring);

        // Populate the distanceContainer with total distance
        // const value = document.createElement('pre');
        // const distance = turf.length(linestring);
        // value.textContent = `Total distance: ${distance.toLocaleString()}km`;
        // distanceContainer.appendChild(value);
        // }

        // map.getSource('geojson').setData(geojson);
      });
    });
    map.on('mousemove', (e) => {
      const features = map.queryRenderedFeatures(e.point, {
        layers: ['measure-points']
      });
      // Change the cursor to a pointer when hovering over a point on the map.
      // Otherwise cursor is a crosshair.
      map.getCanvas().style.cursor = features.length
        ? 'pointer'
        : 'crosshair';
    });




  }
}

