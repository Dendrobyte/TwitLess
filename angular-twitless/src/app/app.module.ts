import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ColorTheme, NgxBootstrapIconsModule, questionCircle } from 'ngx-bootstrap-icons';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

const icons = {
  questionCircle
}

@NgModule({
  declarations: [
    AppComponent
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
