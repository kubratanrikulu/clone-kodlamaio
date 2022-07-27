import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { MainComponent } from './common/main/main.component';
import { CardComponent } from './common/card/card.component';
import { FooterComponent } from './common/footer/footer.component';
import { PrepareCampComponent } from './common/pages/prepare-camp/prepare-camp.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainComponent,
    CardComponent,
    FooterComponent,
    PrepareCampComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
