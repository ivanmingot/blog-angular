import { ModuleWithProviders} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//IMPORT COMPONENTS
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {HomeComponent} from './components/home/home.component';
import {ErrorComponent} from './components/error/error.component';
import {PostNewComponent} from './components/post-new/post-new.component';
import {PostDetailComponent} from './components/post-detail/post-detail.component';
import {MyPostsComponent} from './components/my-posts/my-posts.component';

//DEFINE ROUTES
const appRoutes: Routes = [
	{path:'', component:HomeComponent},
	{path:'home', component:HomeComponent},
	{path:'login', component:LoginComponent},
	{path:'logout/:sure', component:LoginComponent},
	{path:'register', component:RegisterComponent},
	{path:'post-new', component:PostNewComponent},
	{path:'post/:id', component:PostDetailComponent},
	{path:'myposts/:id', component:MyPostsComponent},
	{path:'**', component:ErrorComponent},
];

//EXPORT CONFIGURATION
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);