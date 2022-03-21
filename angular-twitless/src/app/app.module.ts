import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ColorTheme, NgxBootstrapIconsModule, questionCircle, houseFill, envelope, exclamationLg, graphUpArrow, gearFill } from 'ngx-bootstrap-icons';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { MessagesComponent } from './pages/messages/messages.component';
import { ActivethreadsComponent } from './pages/activethreads/activethreads.component';
import { IntheloopComponent } from './pages/intheloop/intheloop.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { NavbarComponent } from './utils/navbar/navbar.component';
import { HeaderComponent } from './utils/header/header.component';

const icons = {
  questionCircle,
  houseFill,
  envelope,
  exclamationLg,
  graphUpArrow,
  gearFill
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MessagesComponent,
    ActivethreadsComponent,
    IntheloopComponent,
    SettingsComponent,
    LoginpageComponent,
    NavbarComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxBootstrapIconsModule.pick(icons, {
      theme: ColorTheme.Info
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
