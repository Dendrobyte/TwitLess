import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  title = 'TwitLess';

  showInfo: boolean = false;
  buttonClicked: boolean = false;

  public onSigninClick() {
    this.router.navigate(['/home'])
  }

  public onHelpClick() {
    this.showInfo = !this.showInfo;
    this.buttonClicked = !this.buttonClicked;
  }

}
