import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-last',
  templateUrl: './last.component.html',
  styleUrls: ['./last.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class LastComponent implements OnInit {
  text:string | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
