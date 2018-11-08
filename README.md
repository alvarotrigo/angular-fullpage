# Angular fullpage
![preview](https://alvarotrigo.com/angular-fullpage/imgs/angular-fullpage-wrapper.png?v=2)
<p align="center">
Official Angular wrapper for the <a target="_blank" href="https://github.com/alvarotrigo/fullPage.js/">fullpage.js library</a>.
</p>

This project was generated with [Angular CLI] version 6.2.4.


- [Demo online](https://alvarotrigo.com/angular-fullpage/) | [CodeSandbox](https://codesandbox.io/s/m34yq5q0qx)
- [fullpage.js Extensions](https://alvarotrigo.com/fullPage/extensions/)
- Brought by [@imac2](https://twitter.com/imac2) thanks to [Vong Panha Huot
](https://github.com/vh13294).

## Table of Contents

- [Installation](https://github.com/alvarotrigo/angular-fullpage#installation)
- [License](https://github.com/alvarotrigo/angular-fullpage#license)
- [Usage](https://github.com/alvarotrigo/angular-fullpage#usage)
  - [Use extensions](https://github.com/alvarotrigo/angular-fullpage#use-extensions)
- [Examples](https://github.com/alvarotrigo/angular-fullpage#examples)
- [Contributing](https://github.com/alvarotrigo/angular-fullpage#contributing)
- [Resources](https://github.com/alvarotrigo/angular-fullpage#resources)

## Installation

```shell
npm install @fullpage/angular-fullpage
```

This will install the Angular wrapper as well as [fullpage.js](https://github.com/alvarotrigo/fullPage.js/) library.

## Usage

```typescript
// app.modules.ts
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

```scss
/* styles.scss or xxx.component.scss */
@import url(~fullpage.js/dist/fullpage.min.css);
```

Using fullpage directive in your component

```typescript
// xxx.component.ts
export class AppComponent {
  config: any;
  fullpage_api: any;

  constructor() {

    // for more details on config options please visit fullPage.js docs
    this.config = {
      // fullpage options
      licenseKey: 'YOUR LICENSE KEY HERE',
      anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],
      menu: '#menu',

      // fullpage callbacks
      afterResize: () => {
        console.log("After resize");
      },
      afterLoad: (origin, destination, direction) => {
        console.log(origin.index);
      }
    };
  }

  getRef(fullPageRef) {
    this.fullpage_api = fullPageRef;
  }

}

```

Adding fullpage directive:

```html
// xxx.component.html
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

### Use extensions
In order to make use of [fullpage.js extension](https://alvarotrigo.com/fullPage/extensions/) you'll have to add the extension file to `angular.json`.

For example, if we want to use the `scrollHorizontally` extension we will have to add the path to our `fullpage.scrollHorizontally.min.js` file on the `scripts` array:

```javascript
"assets": [
  "src/favicon.ico",
  "src/assets"
],

"styles": [
  "src/styles.css"
],

"scripts": [
  "src/assets/fullpage.scrollHorizontally.min.js"
],
```

## Use of scrollOverflow
Same procedure than the [use of extensions](https://github.com/alvarotrigo/angular-fullpage#use-extensions) detailed above.

## Examples
You can check some examples on the [`src` folder](https://github.com/alvarotrigo/angular-fullpage/tree/master/src).

## Contributing

Found an issue? Have an idea? Check out the [Contributing](https://github.com/alvarotrigo/angular-fullpage/blob/master/CONTRIBUTING.md) guide and open a PR

## Resources

- [Wordpress theme](https://alvarotrigo.com/fullPage/utils/wordpress.html)
- [fullpage.js Extensions](https://alvarotrigo.com/fullPage/extensions/)
- [CSS Easing Animation Tool - Matthew Lein](http://matthewlein.com/ceaser/) (useful to define the `easingcss3` value)
- [fullPage.js unpakg CDN](https://unpkg.com/fullpage.js)
- [fullPage.js jsDelivr CDN](http://www.jsdelivr.com/#!jquery.fullpage)
- [fullPage.js cdnJS CDN](https://cdnjs.com/libraries/fullPage.js)

