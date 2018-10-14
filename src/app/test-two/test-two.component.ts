import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-two',
  templateUrl: './test-two.component.html',
  styleUrls: ['./test-two.component.scss']
})
export class TestTwoComponent implements OnInit {
  config: any;
  fullpage_api: any;

  constructor() {

    // this is just an example => for more details on config please visit fullPage.js docs
    this.config = {
      licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
      // Navigation
      anchors: ['p1', 'p2', 'p3', 'p4', 'p5'],
      navigation: true,
      navigationPosition: 'right',
      showActiveTooltip: true,
      slidesNavigation: true,
      slidesNavPosition: 'bottom',
      // Scrolling
      autoScrolling: true,
      offsetSections: false,
      //  Accessibility
      keyboardScrolling: true,
      animateAnchor: true,
      // Design
      sectionsColor: ['#7BAABE', 'whitesmoke', '#7BAABE', 'whitesmoke', '#7BAABE'],
      paddingTop: '3em',
      paddingBottom: '10px'
    };
  }

  ngOnInit() {
  }

  getRef(fullPageRef) {
    console.log('created');
    this.fullpage_api = fullPageRef;
  }

}
