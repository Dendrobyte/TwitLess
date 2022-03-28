import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MessagesComponent } from './pages/messages/messages.component';
import { ActivethreadsComponent } from './pages/activethreads/activethreads.component';
import { IntheloopComponent } from './pages/intheloop/intheloop.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { AppComponent } from './app.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { NavbarComponent } from './utils/navbar/navbar.component';
import { HeaderComponent } from './utils/header/header.component';
import { BannerComponent } from './intheloop/banner/banner.component';

const routes: Routes = [
  { path: '', component: LoginpageComponent, pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'messages', component: MessagesComponent },
  { path: 'activethreads', component: ActivethreadsComponent },
  { path: 'intheloop', component: IntheloopComponent },
  { path: 'settings', component: SettingsComponent },
  {
    path: 'dev', children: [
      { path: 'navbar', component: NavbarComponent },
      { path: 'header', component: HeaderComponent },
      { path: 'loopbanner', component: BannerComponent }
    ]
  }
  // TODO: Page not found route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
