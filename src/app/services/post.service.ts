import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../models/post';
import { global } from './globals';

@Injectable()
export class PostService{
	public url: string;
	public identity;
	public token;
	public dates;
	
	constructor(
		public _http: HttpClient
	){
		this.url = global.url;
	}
	create(token, post): Observable<any>{
		let json = JSON.stringify(post);
		let params = 'json='+json;
		console.log(params);
		let headers = new HttpHeaders().set('Content-type', 'application/x-www-form-urlencoded')
		                               .set('Authorization', token);
		
		return this._http.post(this.url+'post/store', params, {headers:headers});
	}
	
	getPosts(query, from, to):Observable<any>{
		this.dates = {
			"q" : query,
			"from" : from,
			"to" : to
		};
		let json = JSON.stringify(this.dates);
		let params = 'json='+json;
		
		console.log(params);
		
		let headers = new HttpHeaders().set('Content-type', 'application/x-www-form-urlencoded')
		
		
		return this._http.post(this.url+'post', params , {headers:headers});
		                             
	}
	getPostsByDates(date_from, date_to):Observable<any>{
		this.dates = {
			"from" : date_from,
			"to" : date_to
		}
		let headers = new HttpHeaders().set('Content-type', 'application/x-www-form-urlencoded')
		let params = this.dates;
		
		return this._http.post(this.url+'post', params , {headers:headers});
		                             
	}
	
	getPost(id):Observable<any>{
		let headers = new HttpHeaders().set('Content-type', 'application/x-www-form-urlencoded')
		
		return this._http.get(this.url+'post/' + id, {headers:headers});
	}
	getMyPosts(token, id){
		let headers = new HttpHeaders().set('Content-type', 'application/x-www-form-urlencoded')
		                                .set('Authorization', token);
		return this._http.get(this.url+'post/myposts/' + id, {headers:headers});
	}
}