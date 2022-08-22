import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoapComponent } from './components/logoap/logoap.component';
import { SocialComponent } from './components/social/social.component';
import { BanerComponent } from './components/baner/baner.component';
import { BannerComponent } from './components/banner/banner.component';
import { AcercadeComponent } from './components/acercade/acercade.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HsyssComponent } from './components/hsyss/hsyss.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoapComponent,
    SocialComponent,
    BanerComponent,
    BannerComponent,
    AcercadeComponent,
    ExperienciaComponent,
    EducacionComponent,
    HsyssComponent,
    ProyectosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgCircleProgressModule.forRoot({
    "backgroundGradient": true,
    "backgroundColor": "#ffffff",
    "backgroundGradientStopColor": "#13726c",
    "backgroundOpacity": 1,
    "backgroundStroke": "#ffffff",
    "backgroundStrokeWidth": 10,
    "radius": 81,
    "space": -1,
    "unitsColor": "#000000",
    "outerStrokeWidth": 12,
    "outerStrokeColor": "#00fbff",
    "innerStrokeColor": "#00fbff",
    "innerStrokeWidth": 5,
    "titleColor": "#000000",
    "subtitleColor": "#000000",
    "imageHeight": 20,
    "imageWidth": 20
  })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
