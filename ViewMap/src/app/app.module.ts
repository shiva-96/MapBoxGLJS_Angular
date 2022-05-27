import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapBoxComponent } from './map-box/map-box.component';
import { ThreeDimensionalModelComponent } from './three-dimensional-model/three-dimensional-model.component';
import { GradientSkyLayerMapComponent } from './gradient-sky-layer-map/gradient-sky-layer-map.component';
import { DisplayPopupComponent } from './display-popup/display-popup.component';
import { DisplayOnClickComponent } from './display-on-click/display-on-click.component';
import { DistanceMeasureComponent } from './distance-measure/distance-measure.component';
import { NewlayerComponent } from './newlayer/newlayer.component';
import { UndermousepointerComponent } from './undermousepointer/undermousepointer.component';
import { FullscreenmapComponent } from './fullscreenmap/fullscreenmap.component';
import { CoordinatesinputgeocoderComponent } from './coordinatesinputgeocoder/coordinatesinputgeocoder.component';
import { AddpolygonComponent } from './addpolygon/addpolygon.component';
import { DefaultmarkerComponent } from './defaultmarker/defaultmarker.component';
import { AddLineGeoJsonComponent } from './add-line-geo-json/add-line-geo-json.component';

environment

@NgModule({
  declarations: [
    AppComponent,
    MapBoxComponent,
    ThreeDimensionalModelComponent,
    GradientSkyLayerMapComponent,
    DisplayPopupComponent,
    DisplayOnClickComponent,
    DistanceMeasureComponent,
    NewlayerComponent,
    UndermousepointerComponent,
    FullscreenmapComponent,
    CoordinatesinputgeocoderComponent,
    AddpolygonComponent,
    DefaultmarkerComponent,
    AddLineGeoJsonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
