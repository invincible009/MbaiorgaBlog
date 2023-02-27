import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AboutComponent } from './about/about.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { MastheadComponent } from './masthead/masthead.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { PastPostsComponent } from './past-posts/past-posts.component';
import { ViewPostComponent } from './view-post/view-post.component';
import { PreviewPostComponent } from './preview-post/preview-post.component';
import { AuthorPostComponent } from './author-post/author-post.component';
import { LoadingComponent } from './loading/loading.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
   

  ],
  declarations: [
    AppComponent,
    FooterComponent,
    MastheadComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    PastPostsComponent,
    ViewPostComponent,
    PreviewPostComponent,
    AuthorPostComponent,
    LoadingComponent
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
