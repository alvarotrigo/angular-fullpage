import { Component, OnInit, Renderer2, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-dynamic-changes',
  standalone: false,
  templateUrl: './dynamic-changes.component.html',
  styleUrls: ['./dynamic-changes.component.scss']
})
export class DynamicChangesExampleComponent implements OnInit {
  @ViewChild('fullpageRef') fp_directive: ElementRef;
  config;
  fullpageApi;

  constructor(private renderer: Renderer2) {

    // this is just an example => for more details on config please visit fullPage.js docs
    this.config = {
      licenseKey: 'YOUR LICENSE KEY HERE',
      anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],
      menu: '#menu',
      navigation: true,
      sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', 'whitesmoke', '#ccddff'],

      // events callback
      afterLoad: (origin, destination, direction) => {
        // console.log(destination);
      },
      afterRender: () => {
        // console.log('afterRender');
      },
      afterResize: (width, height) => {
        // console.log('afterResize' + width + ' ' + height);
      },
      afterSlideLoad: (section, origin, destination, direction) => {
        // console.log(destination);
      }
    };
  }

  ngOnInit() {
  }

  getRef(fullPageRef) {
    this.fullpageApi = fullPageRef;
  }

  addSection() {
    // change background color
    this.config['sectionsColor'] = Array(6).fill(0).map(x => this.randomColor());

    // creating the section div
    const section = this.renderer.createElement('div');
    this.renderer.addClass(section, 'section');
    this.renderer.setProperty(section, 'innerHTML', '<h3>New Section</h3>');
    // adding section
    this.renderer.appendChild(this.fp_directive.nativeElement, section);

    this.fullpageApi.build();
  }

  removeLast() {
    const lastSection = this.fp_directive.nativeElement.lastChild;

    if (lastSection.isEqualNode(this.fullpageApi.getActiveSection().item)) {
      this.fullpageApi.moveSectionUp();
    }
    lastSection.remove();

    this.fullpageApi.build();
  }

  randomColor() {
    return '#' + Math.random().toString(16).slice(-3);
  }
}
