# Angular fullpage
Official Angular wrapper for fullPage.js

![preview](https://alvarotrigo.com/angular-fullpage/imgs/angular-fullpage-wrapper.png?v=2)
<p align="center">
Official Angular wrapper for the <a target="_blank" href="https://github.com/alvarotrigo/fullPage.js/">fullpage.js library</a>.
</p>

This project was generated with [Angular CLI] version 6.2.4.


- [Demo online](https://alvarotrigo.com/angular-fullpage/) | [CodeSandbox](https://codesandbox.io/s/m34yq5q0qx)
- [fullpage.js Extensions](https://alvarotrigo.com/fullPage/extensions/)
- Brought by [@imac2](https://twitter.com/imac2) thanks to [Vong Panha Huot
](https://github.com/vh13294).


```shell
npm install --save fullpage.js
```

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

Example include fullpage directive in your component

```typescript
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

Adding fullpage directive
```html
<div fullpage id="fullpage" [options]="config" (ref)="getRef($event)">
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

Extensions
...

Add extension.js file to angular.json

```javascript
"assets": [
  "src/favicon.ico",
  "src/assets"
],

"styles": [
  "src/styles.css"
],

"scripts": [
  "src/assets/_your_extension_file.js" <--
],
```
