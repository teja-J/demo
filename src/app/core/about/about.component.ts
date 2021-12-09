import { Component, OnInit, ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class AboutComponent implements OnInit {
  items=[
    {
      title:'00',
      time:'DAYS',
      icon:'',
    },
    {
      title:'00',
      time:'HOURS',
    },
    {
      title:'00',
      time:'MINUTES',
    },
    {
      title:'00',
      time:'SECONDS',
    }

  ];


  constructor() { }

  ngOnInit(): void {
  }

}
