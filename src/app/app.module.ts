import { NotFoundComponent } from './pages/site/not-found/not-found.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';

import { AdminLayoutModule } from './layouts/admin-layout/admin-layout.module';
import { SiteModule } from './layouts/site/site.module';
import { ComponetsModule } from './components/componets.module';

import { AppComponent } from './app.component';
import { CarregaJS } from './services/carrega.js.service';



@NgModule({
  declarations: [AppComponent, NotFoundComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    SiteModule,
    AdminLayoutModule,
    ComponetsModule,
  ],
  providers: [CarregaJS, HTMLElement],
  bootstrap: [AppComponent],
})
export class AppModule {}
