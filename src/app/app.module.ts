import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MapComponent } from './map/map.component';
import {AppComponent} from './app.component';
import { FiltersComponent } from './filters/filters.component';
import { NetpointsComponent } from './netpoints/netpoints.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { OrdersComponent } from './orders/orders.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    FiltersComponent,
    NetpointsComponent,
    OrdersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
