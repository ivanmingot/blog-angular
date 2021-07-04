import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserService } from '../../services/user.service';
import { PostService } from '../../services/post.service';
import { User } from '../../models/user';
import { Post } from '../../models/post';
import { global } from '../../services/globals';

@Component({
  selector: 'app-my-posts',
  templateUrl: './my-posts.component.html',
  styleUrls: ['./my-posts.component.css'],
  providers: [UserService, PostService]
})
export class MyPostsComponent implements OnInit {
	public page_title: string;
	public token: any;
	public identity: any;
	public user: User;
	public status: any;
	public posts: Array<Post>;
	public url;
	query: string = '';
	public p;

  constructor(
	private _userService: UserService,
	private _postService: PostService,
	private _router: Router,
	private _route: ActivatedRoute
  ) { 
	this.identity = this._userService.getIdentity();
	this.token = this._userService.getToken();
	 this.url = global.url;
  }

  ngOnInit() {
	  this._postService.getMyPosts(this.token, this.identity.sub).subscribe(
		response => {
			console.log(response);
			if(response['status'] == "success"){
				this.posts = response['posts'];
				this.user = response['user'];
			
				//Make created_at from Mysql more friendly
				
				for(var i = 0; i< this.posts.length; i++){
					this.posts[i].created_at = new Date(this.posts[i].created_at).toDateString();
				  
				}
			  
				
				
				}else{
					
			}
			
			
		},
		error => {
			console.log(<any>error);
			
		}
	  );
  }

}
