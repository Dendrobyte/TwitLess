import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TwitLess';

  showInfo: boolean = false;
  buttonClicked: boolean = false;

  public onSigninClick() {
    alert("Heya!");
  }

  public onHelpClick() {
    this.showInfo = !this.showInfo;
    this.buttonClicked = !this.buttonClicked;
  }
}
