import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  config: any;

  constructor() {

    this.config = {
      licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
      autoScrolling: true,
      sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', 'whitesmoke', '#ccddff'],
      anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', 'lastPage'],
      menu: '#menu',
      lazyLoad: true,
      afterLoad: function() {
        console.log('load');
      }
    };
  }

}
