import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recent-work',
  templateUrl: './recent-work.component.html',
  styleUrls: ['./recent-work.component.css']
})
export class RecentWorkComponent implements OnInit {

  public affichageOne=false;
  public affichageTwo=false;
  public affichageTree=false;
  constructor() { }

  ngOnInit(): void {
  }

  public descriptionOne():void{
    this.affichageOne=!this.affichageOne;
  }
  public descriptionTwo():void{
    this.affichageTwo=!this.affichageTwo;
  }
  public descriptionTree():void{
    this.affichageTree=!this.affichageTree;
  }

}
