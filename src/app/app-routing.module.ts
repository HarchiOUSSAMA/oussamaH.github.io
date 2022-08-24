import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HowIAmComponent} from './components/how-i-am/how-i-am.component';
import {AppComponent} from './app.component';
import {CompetencesComponent} from './components/competences/competences.component';
import {RecentWorkComponent} from './components/recent-work/recent-work.component';
import {HomePageComponent} from './components/home-page/home-page.component';
import {BlogsComponent} from './components/blogs/blogs.component';

const routes: Routes = [
  {
    path:"how_i_am",
    component: HowIAmComponent
  },
  {
    path:"competences",
    component: CompetencesComponent
  },
  {
    path:"recent_work",
    component: RecentWorkComponent
  },
  {
    path:"app-home-page",
    component: HomePageComponent
  },
  {
    path:'app-blogs',
    component: BlogsComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
