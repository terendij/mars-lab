import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import {RoversModule} from "./rovers/rovers.module";
import {HttpClientModule} from "@angular/common/http";
import {PhotosModule} from "./photos/photos.module";
import {WidgetsModule} from "./core/widgets/widgets.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent
  ],
  // Attention la liste des imports : l'order est important
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RoversModule, // ca importe aussi RoversRoutingModule
    HttpClientModule,
    PhotosModule,
    WidgetsModule,
    AppRoutingModule //good practice finir par le global, tjrs les routing module à la fin
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
