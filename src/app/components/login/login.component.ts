import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService]
})
export class LoginComponent implements OnInit {
	public page_title: string;
	public user: User;
	public status: string;
	public token: any;
	public identity: any;
	public message: string;

  constructor(
	private _userService: UserService,
	private _router: Router,
	private _route: ActivatedRoute
	
  ) { 
	this.page_title = 'Identify yourself';
	this.user = new User(1,'','','ROLR_ADMIN','');
  }

  ngOnInit() {
	  //it always runs and closes the session when it gets sure from the url
	  this.logout();
  }
  
  onSubmit(form){
	  console.log(this.user);
	 this._userService.signup(this.user).subscribe(
		response => {
			console.log(response);
			//TOKEN
			if(response.status != 'error'){
				this.status = 'success';
				this.token = response;
				
				//OBJET USER LOGGER
				this._userService.signup(this.user, true).subscribe(
					response => {
						this.identity = response;
						
						//Persist user data
						localStorage.setItem('token', this.token);
						localStorage.setItem('identity', JSON.stringify(this.identity));
						
						//Redirection to home
						this._router.navigate(['home']);
					},
					error => {
						console.log(<any>error);
						this.identity = response;
					}
				  );
			}else{
				this.status = 'error';
				this.message = response.message;
			}
			
			
		},
		error => {
			console.log(<any>error);
			this.status = 'error';
		}
	  );
	  
	  
  }
  logout(){
	  this._route.params.subscribe(params => {
		  let logout = +params['sure'];
		  
		  if(logout == 1){
			  localStorage.removeItem('identity');
			  localStorage.removeItem('token');
			  
			  this.identity = null;
			  this.token = null;
			  
			  //Redirection to home
			  
			  this._router.navigate(['home']);
		  }
	  });
  }

}
