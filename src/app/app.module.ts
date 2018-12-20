import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { HttpModule, JsonpModule } from '@angular/http';
// Added ngx-slack module
import {NgxSlackModule} from 'ngx-slack';

import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { AgmCoreModule } from '@agm/core';
import { WeatherComponent } from './weather/weather.component';
import { CareerComponent } from './career/career.component';
import { CareerResultComponent } from './career/career-result/career-result.component';
import { YoutubeComponent } from './youtube/youtube.component';
import { YoutubeResultComponent } from './youtube/youtube-result/youtube-result.component';
import { WikipediaComponent } from './wikipedia/wikipedia.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    WeatherComponent,
    CareerComponent,
    CareerResultComponent,
    YoutubeComponent,
    YoutubeResultComponent,
    WikipediaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    JsonpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDs0WJS-0UQ8F3N-8qhxyPXDniFVmS0uHQ'
    }),                                                         
    /***
     * Added in to import declaratives to be accesible globally 
     * ***/
     NgxSlackModule.initializeApp('https://hooks.slack.com/services/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'),
  ],
  providers: [],
  entryComponents: [CareerResultComponent, YoutubeResultComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
