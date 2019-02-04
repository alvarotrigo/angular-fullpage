import { Component, OnInit, AfterViewInit, ViewChildren, QueryList } from '@angular/core';

@Component({
  selector: 'app-dynamic-ng-for',
  templateUrl: './dynamic-ng-for.component.html',
  styleUrls: ['./dynamic-ng-for.component.scss']
})
export class DynamicNgForComponent implements OnInit, AfterViewInit {
  @ViewChildren('sectionRef') sectionRef: QueryList<any>;
  config: any;
  fullpage_api: any;
  sections = [1];

  constructor() {
    // this is just an example => for more details on config please visit fullPage.js docs
    this.config = {
      licenseKey: 'YOUR LICENSE KEY HERE',
      anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],
      menu: '#menu',
      navigation: true,
      sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', 'whitesmoke', '#ccddff'],
    };
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.sectionRef.changes.subscribe(() => {
      this.ngForRendred();
    });
  }

  getRef(fullPageRef) {
    this.fullpage_api = fullPageRef;
  }

  add() {
    const twoDigits = Math.random() * 100;
    this.sections.push( Math.round(twoDigits) );
  }

  ngForRendred() {
    console.log('ngFor dom render is done');
    this.fullpage_api.build();
  }

}
