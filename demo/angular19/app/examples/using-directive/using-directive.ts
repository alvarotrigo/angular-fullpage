import { AfterViewInit, Component, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { FullpageDirective} from '@fullpage/angular-fullpage';
import { fullpageOptions } from 'fullpage.js/dist/fullpage.extensions.min';


@Component({
  selector: 'app-using-directive',
  standalone: false,
  templateUrl: './using-directive.html',
  styleUrls: ['./using-directive.scss'],
})
export class UsingDirectiveComponent implements OnInit, AfterViewInit {
  config: fullpageOptions;
  fullpageApi;

  @ViewChild(FullpageDirective)
  fullpageDirective: FullpageDirective;

  constructor() {

    // this is just an example => for more details on config please visit fullPage.js docs
    this.config = {
      licenseKey: 'asdf',
      sectionsColor: ['#7BAABE', 'whitesmoke', '#7BAABE', 'whitesmoke', '#7BAABE'],
      anchors: ['p1', 'p2', 'p3', 'p4', 'p5'],
      navigation: true,
      credits: {
        enabled: false,
      },
    };
  }

  ngAfterViewInit() {
    this.fullpageApi = this.fullpageDirective.fullpageApi;
  }

  ngOnInit() {
  }

}
