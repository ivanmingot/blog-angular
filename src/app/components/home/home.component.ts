import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/post';
import { PostService} from '../../services/post.service';
import { global } from '../../services/globals';
import { Router, ActivatedRoute, Params } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [PostService]
})
export class HomeComponent implements OnInit {
	public page_title: string;
	public url;
	public posts: Array<Post>;
	public status: string;
	public date;
	query: string = '';
	from: string = '';
	to: string = '';
	public p;
	
	
	constructor(
	 private _postService: PostService,
	  private _router: Router,
	 ) {
	  this.page_title = 'Home';
	  this.url = global.url;
	 }

  ngOnInit() {
	this.getPosts();
  }

  
  getPosts(){
	  this._postService.getPosts(this.query, this.from, this.to).subscribe(
		response => {
			console.log(response);
			if(response.status == "success"){
				this.posts = response.posts;
				
				//Make publication_date from Mysql more friendly
				
				for(var i = 0; i< this.posts.length; i++){
					this.posts[i].publication_date = new Date(this.posts[i].publication_date).toDateString();
				}
				console.log(this.posts);
				
				// Clear form fields 
				$("#customForm").trigger('reset');
				$("#searchForm").trigger('reset');
				
				}else{
					this.status = 'error';
				}
			},
		error => {
			console.log(<any>error);
		}
	  );
  }
  
  resetForm(form){
	 form.reset();
  }

}
