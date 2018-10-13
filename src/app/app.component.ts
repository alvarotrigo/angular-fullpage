import { Component, ViewEncapsulation } from '@angular/core';

// fullPage type
import { fullpage_api , options } from 'fullpage.js/dist/fullpage.extensions.min';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  config: options;
  fullpage_api: fullpage_api;

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
      onLeave: () => {
        console.log('onLeave');
      },
      afterLoad: () => {
        console.log('afterLoad');
      },
      afterRender: () => {
        console.log('afterRender');
      },
      afterResize: () => {
        console.log('afterResize');
      },
      afterSlideLoad: () => {
        console.log('slideLoad');
      },
      onSlideLeave: () => {
        console.log('onSlideLeave');
      }
    };
  }

  getRef(fullPageRef) {
    console.log('created');
    this.fullpage_api = fullPageRef;
  }

}
