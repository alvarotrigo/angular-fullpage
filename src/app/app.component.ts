import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  config: any;
  fullpage_api: any;

  constructor() {

    this.config = {
      licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
      autoScrolling: true,
      sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', 'whitesmoke', '#ccddff'],
      anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', 'lastPage'],
      menu: '#menu',
      lazyLoad: true,
      afterLoad: () => {
        console.log('afterLoad');
      },
      afterRender: () => {
        console.log('afterRender');
      },
      afterResize: (width, height) => {
        console.log(width + ' ' + height);
      }
    };
  }

  getFullPage(fullPageRef) {
    console.log('created');
    this.fullpage_api = fullPageRef;
  }

}
