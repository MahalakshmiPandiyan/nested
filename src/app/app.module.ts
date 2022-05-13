import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HomeBaseComponent } from './home-base/home-base.component';
import { HomeColorOthersComponent } from './home-color-others/home-color-others.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeBaseComponent,
    HomeColorOthersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
