import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullscreenControl } from 'mapbox-gl';
import { AddLineGeoJsonComponent } from './add-line-geo-json/add-line-geo-json.component';
import { AddpolygonComponent } from './addpolygon/addpolygon.component';
import { CoordinatesinputgeocoderComponent } from './coordinatesinputgeocoder/coordinatesinputgeocoder.component';
import { DefaultmarkerComponent } from './defaultmarker/defaultmarker.component';
import { DisplayOnClickComponent } from './display-on-click/display-on-click.component';
import { DisplayPopupComponent } from './display-popup/display-popup.component';
import { DistanceMeasureComponent } from './distance-measure/distance-measure.component';
import { FullscreenmapComponent } from './fullscreenmap/fullscreenmap.component';
import { GradientSkyLayerMapComponent } from './gradient-sky-layer-map/gradient-sky-layer-map.component';
import { MapBoxComponent } from './map-box/map-box.component';
import { NewlayerComponent } from './newlayer/newlayer.component';
import { ThreeDimensionalModelComponent } from './three-dimensional-model/three-dimensional-model.component';
import { UndermousepointerComponent } from './undermousepointer/undermousepointer.component';

const routes: Routes = [
  { path: "showingMap", component: MapBoxComponent },
  { path: "3DView", component: ThreeDimensionalModelComponent },
  { path: "gslm", component: GradientSkyLayerMapComponent },
  { path: "popup", component: DisplayPopupComponent },
  { path: "clickpopup", component: DisplayOnClickComponent },
  { path: "distmure", component: DistanceMeasureComponent },
  { path: "newmaplayer", component: NewlayerComponent },
  { path: "ump", component: UndermousepointerComponent },
  { path: "fsm", component: FullscreenmapComponent },
  { path: "cig", component: CoordinatesinputgeocoderComponent },
  { path: "polygon", component: AddpolygonComponent },
  { path: "defaultmarker", component: DefaultmarkerComponent },
  { path: "addline", component: AddLineGeoJsonComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
