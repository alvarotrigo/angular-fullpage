import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  config: any;
  fullpage_api: any;

  constructor() {

    // this is just an example => for more details on config please visit fullPage.js docs
    this.config = {
      licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
      // Navigation
      anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],
      menu: '#menu',
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
      sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', 'whitesmoke', '#ccddff'],
      paddingTop: '3em',
      paddingBottom: '10px',
      parallax: true,
      parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},

      lazyLoad: true,

      // events callback
      onLeave: (origin, destination, direction) => {
        console.log('onLeave');
      },
      afterLoad: (origin, destination, direction) => {
        console.log('afterLoad');
      },
      afterRender: () => {
        console.log('afterRender');
      },
      afterResize: (width, height) => {
        console.log('afterResize');
      }
    };
  }

  getRef(fullPageRef) {
    console.log('created');
    this.fullpage_api = fullPageRef;
  }

}
