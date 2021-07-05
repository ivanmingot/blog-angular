import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {
	@Input() posts;
	@Input() url;
	
	
	public p;
	
	
	

  constructor() {
	   
	  }

  ngOnInit() {
	 
	
	 
  }
  
  pageChanged(){
	  window.scroll(0,0);
  }


}
