import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [
    trigger('fadeInOut', [
      state('void', style({ opacity: 0 })),
      transition('void <=> *', animate('300ms')),
    ]),
  ]
})

export class LoginComponent implements OnInit {


  constructor(private router: Router) {}


  ngOnInit(): void {
  }

  navigateToHome() {
    this.router.navigate(['/home']);
  }


}
