# angular-fullpage
Official Angular wrapper for fullPage.js

This project was generated with [Angular CLI] version 6.2.4.


npm install --save fullpage.js


```typescript
import { AngularFullpageModule } from 'angular-fullpage';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFullpageModule //*** added
  ]
})
```

In your style.scss or component.scss

```css
@import url(~fullpage.js/dist/fullpage.min.css);
```

example include fullpage directive in your component

```typescript
import { fullpage_api , options } from 'fullpage.js/dist/fullpage.extensions.min';

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
      // events callback
      afterResize: () => {
      },
      afterSlideLoad: () => {
      }
    };
  }

  getRef(fullPageRef) {
    this.fullpage_api = fullPageRef;
  }

}

```

adding fullpage directive
```html
<div fullpage [options]="config" (ref)="getRef($event)">
  <div class="section">Some section1</div>
	<div class="section" (click)="fullpage_api.moveSectionDown()">Some section2</div>
	<div class="section">
		<div class="slide">Slide 2.1</div>
		<div class="slide">Slide 2.2</div>
		<div class="slide">Slide 2.3</div>
	</div>
	<div class="section" (click)="fullpage_api.moveTo('secondPage', 2)">Some section4</div>
</div>
```

If you need to override the default css you need to change View Encapsulation

```typescript
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None  // <-------
})
```

example overide the padding of control arrow

```css
.fp-controlArrow {
    padding: 0 2%;
}
```


Extensions
...

Add extension.js file to angular.json

"assets": [  
  "src/favicon.ico",  
  "src/assets"  
],

"styles": [  
  "src/styles.css"  
],

"scripts": [  
  "src/assets/_your_extension_file.js"  
],
