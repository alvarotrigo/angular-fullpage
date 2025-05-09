import { Component, OnInit } from '@angular/core';
import { fullpageOptions, fullpageApi } from 'fullpage.js/dist/fullpage.extensions.min';

@Component({
  selector: 'app-type',
  standalone: false,
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.scss']
})
export class TypeExampleComponent implements OnInit {
  config: fullpageOptions;
  fullpageApi: fullpageApi;

  constructor() {

    // this is just an example => for more details on config please visit fullPage.js docs
    this.config = {
      licenseKey: 'YOUR LICENSE KEY HERE',
      anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],
      menu: '#menu',
      scrollOverflow: true,
      sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', 'whitesmoke', '#ccddff'],
      credits: {
        enabled: false,
      },

      // events callback
      afterLoad: (origin, destination, direction) => {
        console.log(destination);
      },
      afterRender: () => {
        console.log('afterRender');
      },
      afterResize: (width, height) => {
        console.log('afterResize' + width + ' ' + height);
      },
      afterSlideLoad: (section, origin, destination, direction) => {
        console.log(destination);
      }
    };
  }

  ngOnInit() {
  }

  getRef(fullPageRef) {
    this.fullpageApi = fullPageRef;
  }

}
