import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss'],
  encapsulation:ViewEncapsulation.None,
})
export class FaqComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
