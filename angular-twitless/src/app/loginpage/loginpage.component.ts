import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {

  title = 'TwitLess';

  showInfo: boolean = false;
  buttonClicked: boolean = false;
  showBetaCode: boolean = false;
  codeChecked: boolean = false;
  codeText: string = "";

  constructor(private router: Router) {
    this.codeText = "Code Here";
  }

  ngOnInit(): void {
  }

  public onSigninClick(): void {
    if (this.showBetaCode === false) {
      this.showBetaCode = true;
      return;
    }
    if (this.codeText === 'twitless-beta-test-4488') {
      this.router.navigate(['/home'])
    } else {
      this.codeChecked = true;
    }

    // Obviously you can just skip the route lol, but that will come later
    // TODO: See above
  }

  public onHelpClick(): void {
    this.showInfo = !this.showInfo;
    this.buttonClicked = !this.buttonClicked;
  }

}
