
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-inside-the-hide-box',
  templateUrl: './inside-the-hide-box.component.html',
  styleUrls: ['./inside-the-hide-box.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class InsideTheHideBoxComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
