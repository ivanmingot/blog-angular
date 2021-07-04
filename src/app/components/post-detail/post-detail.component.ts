import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { PostService } from '../../services/post.service';
import { Post } from '../../models/post';
import { global } from '../../services/globals';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css'],
  providers: [PostService]
})
export class PostDetailComponent implements OnInit {
	public page_title: string;
	public post;
	public url;

  constructor(
	private _postService: PostService,
	private _router: Router,
	private _route: ActivatedRoute
  ) { 
    this.url = global.url;
	this.page_title = 'Post detail'
  }

  ngOnInit() {
	  this.getPost();
  }
  
  getPost(){
	  //get post id
	  this._route.params.subscribe(params => {
		  let id = +params['id'];
		  console.log(id);
		  
		//ajaz petition to get post values
		this._postService.getPost(id).subscribe(
			response => {
				console.log(response);
				if(response.status != 'error'){
					this.post = response.post;
					console.log(this.post);
					this.post.created_at = new Date(this.post.created_at).toDateString();
				}else{
					//Redirection to home
					this._router.navigate(['home']);
				}
						
						
						
					
			},
			error => {
				console.log(<any>error);
				this._router.navigate(['home']);
				
			}
		);
		  
		
	  });
  }

}
