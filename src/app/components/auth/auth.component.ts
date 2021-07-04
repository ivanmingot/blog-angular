import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
	@Input() identity;

  constructor() { }

  ngOnInit() {
  }

}
