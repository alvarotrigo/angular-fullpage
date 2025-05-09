import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic',
  standalone: false,
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss']
})
export class BasicExampleComponent implements OnInit {
  config;
  fullpageApi;

  constructor() {

    // this is just an example => for more details on config please visit fullPage.js docs
    this.config = {
      licenseKey: 'YOUR LICENSE KEY HERE',
      sectionsColor: ['#7BAABE', 'whitesmoke', '#7BAABE', 'whitesmoke', '#7BAABE'],
      anchors: ['p1', 'p2', 'p3', 'p4', 'p5'],
      navigation: true,
    };
  }

  ngOnInit() {
  }

  getRef(fullPageRef) {
    this.fullpageApi = fullPageRef;
  }

}
