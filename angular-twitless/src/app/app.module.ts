import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ColorTheme, NgxBootstrapIconsModule, questionCircle } from 'ngx-bootstrap-icons';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { MessagesComponent } from './pages/messages/messages.component';
import { ActivethreadsComponent } from './pages/activethreads/activethreads.component';
import { IntheloopComponent } from './pages/intheloop/intheloop.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { NavbarComponent } from './utils/navbar/navbar.component';

const icons = {
  questionCircle
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
    NavbarComponent
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
