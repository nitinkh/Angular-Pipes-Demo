import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import {ApiService} from './api.service';
import {LoginSerive} from './login.service';

import {CategoryPipe} from './category.pipe';
import {OrderrByPipe} from './orderby.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CategoryPipe,
    OrderrByPipe
  ],
  imports: [
    HttpModule,
    BrowserModule,
    FormsModule,
    CommonModule
    
  ],
  providers: [ApiService,LoginSerive],
  bootstrap: [AppComponent]
})
export class AppModule { }
