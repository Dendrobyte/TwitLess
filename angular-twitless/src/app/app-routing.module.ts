import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MessagesComponent } from './pages/messages/messages.component';
import { ActivethreadsComponent } from './pages/activethreads/activethreads.component';
import { IntheloopComponent } from './pages/intheloop/intheloop.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { AppComponent } from './app.component';
import { LoginpageComponent } from './loginpage/loginpage.component';

const routes: Routes = [
  { path: '', component: LoginpageComponent, pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'messages', component: MessagesComponent },
  { path: 'activethreads', component: ActivethreadsComponent },
  { path: 'intheloop', component: IntheloopComponent },
  { path: 'settings', component: SettingsComponent }
  // TODO: Page not found route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
