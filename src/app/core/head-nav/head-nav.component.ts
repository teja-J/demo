import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-head-nav',
  templateUrl: './head-nav.component.html',
  styleUrls: ['./head-nav.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class HeadNavComponent implements OnInit {
  navs=[
    {
      title:'Home'
    },
    {
      title:'About'
    },
    {
      title:'gallery'
    },
    {
      title:'event'
    },
    {
      title:'people'
    },
    {
      title:'blog'
    },
    {
      title:'rsvp'
    }
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
