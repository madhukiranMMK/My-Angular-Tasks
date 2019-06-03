import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VowelsComponent } from './vowels/vowels.component';
import { CharsComponent } from './chars/chars.component';
import { ReverseStringComponent } from './reverse-string/reverse-string.component';


@NgModule({
  declarations: [
    AppComponent,
    VowelsComponent,
    CharsComponent,
    ReverseStringComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
