import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserService } from '../../services/user.service';
import { PostService } from '../../services/post.service';
import { Post } from '../../models/post';
import { global } from '../../services/globals';

@Component({
  selector: 'app-post-new',
  templateUrl: './post-new.component.html',
  styleUrls: ['./post-new.component.css'],
  providers: [UserService, PostService]
})
export class PostNewComponent implements OnInit {
	public page_title: string;
	public token: any;
	public identity: any;
	public post: Post;
	public status;
	
	public froala_options: Object = {
		charCouterCount: true,
		toolbarButtons: ['bold', 'italic', 'underline', 'paragraphFormat', 'alert'],
		toolbarButtonsXS: ['bold', 'italic', 'underline', 'paragraphFormat', 'alert'],
		toolbarButtonsSM: ['bold', 'italic', 'underline', 'paragraphFormat', 'alert'],
		toolbarButtonsMD: ['bold', 'italic', 'underline', 'paragraphFormat', 'alert'],
	}
	
	public afuConfig = {
		multiple: false,
		formatsAllowed: ".jpg,.png,.gif,.jpeg ",
		maxSize: "50",
		uploadAPI:  {
		  url: global.url+'post/upload',
		  headers: {
			  "Access-Control-Allow-Origin" : "*",
			  "Authorization" : this._userService.getToken()
		  }
		},
		theme: "attachPin",
		hideProgressBar: false,
		hideResetBtn: true,
		hideSelectBtn: false,
		attachPinText: 'Upload your post Image'
		
		
	};

  constructor(
	private _userService: UserService,
	private _postService: PostService,
	private _router: Router,
	private _route: ActivatedRoute
  ) { 
	this.page_title = 'New Post';
	this.identity = this._userService.getIdentity();
	this.token = this._userService.getToken();
  }

  ngOnInit() {
	  this.post = new Post(1,this.identity.sub,'','',null,null,null)
	  console.log(this.post);
  }
  
  imageUpload(data){
	  
	  let image_data = JSON.parse(data.response);
	  this.post.image = image_data.image;
	  
  }
  onSubmit(form){
	  
	  this._postService.create(this.token, this.post).subscribe(
		response => {
			console.log(response);
			if(response.status == "success"){
				this.post = response.post;
				this.status = 'success';
				this._router.navigate[('/home')];
				
			}else{
				this.status = 'error';
			}
			
		},
		error => {
			console.log(<any>error);
			this.status = 'error';
		}
	  );
	  
	  
  }
	  
  

}
