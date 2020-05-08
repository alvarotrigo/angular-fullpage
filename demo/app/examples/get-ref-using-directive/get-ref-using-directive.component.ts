import { AfterViewInit, Component, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { FullpageDirective } from '@fullpage/angular-fullpage';


@Component({
  selector: 'app-get-ref-using-directive',
  templateUrl: './get-ref-using-directive.component.html',
  styleUrls: ['./get-ref-using-directive.component.scss'],
})
export class GetRefUsingDirectiveComponent implements OnInit, AfterViewInit {
  config;
  fullpage_api;

  @ViewChild(FullpageDirective)
  fullpageDirective: FullpageDirective;

  constructor() {

    // this is just an example => for more details on config please visit fullPage.js docs
    this.config = {
      licenseKey: 'asdf',
      sectionsColor: ['#7BAABE', 'whitesmoke', '#7BAABE', 'whitesmoke', '#7BAABE'],
      anchors: ['p1', 'p2', 'p3', 'p4', 'p5'],
      navigation: true,
    };
  }

  ngAfterViewInit() {
    this.fullpage_api = this.fullpageDirective.fullpage_api;
  }

  ngOnInit() {
  }

}
