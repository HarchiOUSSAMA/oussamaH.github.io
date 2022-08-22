import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-how-i-am',
  templateUrl: './how-i-am.component.html',
  styleUrls: ['./how-i-am.component.css']
})
export class HowIAmComponent implements OnInit {
  public affichage = false

  constructor() { }

  ngOnInit(): void {
  }
  public affichier(): void {
    this.affichage = !this.affichage;
  }

}
