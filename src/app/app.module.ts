import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing, appRoutingProviders } from './app.routing';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { AngularFileUploaderModule } from "angular-file-uploader";
import {NgxPaginationModule} from 'ngx-pagination';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { PostNewComponent } from './components/post-new/post-new.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { MyPostsComponent } from './components/my-posts/my-posts.component';
import { AuthComponent } from './components/auth/auth.component';
import { FooterComponent } from './components/footer/footer.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { PostsListComponent } from './components/home/posts-list/posts-list.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ErrorComponent,
    PostNewComponent,
    PostDetailComponent,
    MyPostsComponent,
    AuthComponent,
	FooterComponent,
	UserProfileComponent,
	PostsListComponent,
	
    
  ],
  imports: [
    BrowserModule,
	routing,
	FormsModule,
	HttpClientModule,
	FroalaEditorModule.forRoot(), 
	FroalaViewModule.forRoot(),
	AngularFileUploaderModule,
	NgxPaginationModule
  ],
  providers: [
	appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
