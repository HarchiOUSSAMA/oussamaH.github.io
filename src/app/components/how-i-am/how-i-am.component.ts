import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-how-i-am',
  templateUrl: './how-i-am.component.html',
  styleUrls: ['./how-i-am.component.css']
})
export class HowIAmComponent implements OnInit,AfterViewInit {
  public affichage = false ;
  public affichageSpinner = false ;
  constructor() { }

  ngOnInit(): void {
  }
  public affichier(): void {
    this.affichage = !this.affichage;
  }

  ngAfterViewInit(): void {
  setTimeout(()=>this.affichageSpinner= true,1000);
  }

}
