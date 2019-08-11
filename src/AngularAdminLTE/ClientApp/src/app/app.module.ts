import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ControlsidebarComponent } from './controlsidebar/controlsidebar.component';
import { HomeComponent } from './home/home.component';
import { MainfootComponent } from './mainfoot/mainfoot.component';
import { MainsidebarComponent } from './mainsidebar/mainsidebar.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ControlsidebarComponent,
    HomeComponent,
    MainfootComponent,
    MainsidebarComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
