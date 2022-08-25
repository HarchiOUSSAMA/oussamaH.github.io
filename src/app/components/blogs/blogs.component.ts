import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {

  public blogAffiche : boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  descriptionBlogOne (): void{
    this.blogAffiche=!this.blogAffiche;
  }

}
