import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './main-component/header/header.component';
import { FooterComponent } from './main-component/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { BenelliComponent } from './pages/benelli/benelli.component';
import { KtmComponent } from './pages/ktm/ktm.component';
import { KawasakiComponent } from './pages/kawasaki/kawasaki.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    BenelliComponent,
    KtmComponent,
    KawasakiComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
