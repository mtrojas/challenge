import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UsdComponent } from './usd/usd.component';
import { UfComponent } from './uf/uf.component';
import { TmcComponent } from './tmc/tmc.component';
import { HomeComponent } from './home/home.component';

import { routes } from './routes';

import { SbifService } from './sbif.service';

@NgModule({
  declarations: [
    AppComponent,
    UsdComponent,
    UfComponent,
    TmcComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule
  ],
  providers: [SbifService],
  bootstrap: [AppComponent]
})
export class AppModule { }
