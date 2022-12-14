import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import {HowIAmComponent} from './components/how-i-am/how-i-am.component';
import { CompetencesComponent } from './components/competences/competences.component';
import { RecentWorkComponent } from './components/recent-work/recent-work.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { ContactMeComponent } from './components/contact-me/contact-me.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HowIAmComponent,
    CompetencesComponent,
    RecentWorkComponent,
    FooterComponent,
    HomePageComponent,
    BlogsComponent,
    ContactMeComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
