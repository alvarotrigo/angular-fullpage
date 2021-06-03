# Angular fullpage
![preview](https://alvarotrigo.com/angular-fullpage/imgs/angular-fullpage-wrapper.png?v=2)
<p align="center">
Official Angular wrapper for the <a target="_blank" href="https://github.com/alvarotrigo/fullPage.js/">fullpage.js library</a>.
</p>
<p align="center">
  <img src="https://img.shields.io/badge/angular--fullpage-v0.0.16-brightgreen.svg" alt="angular-fullpage version" />
</p>

- [Demo online](https://alvarotrigo.com/angular-fullpage/) | [Stackblitz](https://stackblitz.com/edit/angular-nqsqwk)
- [fullpage.js Extensions](https://alvarotrigo.com/fullPage/extensions/)
- Brought by [@imac2](https://twitter.com/imac2) thanks to [Vong Panha Huot
](https://github.com/vh13294).

## Table of Contents

- [Installation](https://github.com/alvarotrigo/angular-fullpage#installation)
- [License](https://github.com/alvarotrigo/angular-fullpage#license)
- [Usage](https://github.com/alvarotrigo/angular-fullpage#usage)
  - [Use extensions](https://github.com/alvarotrigo/angular-fullpage#use-extensions)
  - [Use scrolloverflow](https://github.com/alvarotrigo/angular-fullpage#use-of-scrolloverflow)
- [Dynamic changes](https://github.com/alvarotrigo/angular-fullpage#dynamic-changes)
- [Examples](https://github.com/alvarotrigo/angular-fullpage#examples)
- [Contributing](https://github.com/alvarotrigo/angular-fullpage#contributing)
- [Resources](https://github.com/alvarotrigo/angular-fullpage#resources)

## Installation

```shell
npm install @fullpage/angular-fullpage
```

This will install the Angular wrapper as well as [fullpage.js](https://github.com/alvarotrigo/fullPage.js/) library.

## License

### Non open source license

If you want to use angular-fullpage to develop non open sourced sites, themes, projects, and applications, the Commercial license is the appropriate license. With this option, your source code is kept proprietary. Which means, you won't have to change your whole application source code to an open source license. [Purchase a Fullpage Commercial License](https://alvarotrigo.com/fullPage/pricing/).

### Open source license

If you are creating an open source application under a license compatible with the [GNU GPL license v3](https://www.gnu.org/licenses/gpl-3.0.html), you may use fullPage under the terms of the GPLv3.

**The credit comments in the JavaScript and CSS files should be kept intact** (even after combination or minification)

[Read more about fullPage's license](https://alvarotrigo.com/fullPage/pricing/).

## Usage

```typescript
// app.module.ts
import { AngularFullpageModule } from '@fullpage/angular-fullpage';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFullpageModule //*** added
  ]
})
```

You should import the fullpage.js stylesheet on your `style.scss` or `component.scss`:

```scss
/* styles.scss or app.component.scss */
@import url(~fullpage.js/dist/fullpage.min.css);
```

```css
/* standard css */
@import '~fullpage.js/dist/fullpage.min.css';
```

Then use the directive on your component:

```typescript
// app.component.ts
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

You can optionally import types by

```typescript
import { options, fullpage_api } from 'fullpage.js/dist/fullpage.extensions.min';
config: options;
fullpage_api: fullpage_api;
```

Example of HTML:

```html
<!-- app.component.html -->
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

```json
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

Then pass the required options to fullPage.js. In this case `scrollHorizontally:true`.

### Use of scrollOverflow
Same procedure than the [use of extensions](https://github.com/alvarotrigo/angular-fullpage#use-extensions) detailed above.

```json
"assets": [
  "src/favicon.ico",
  "src/assets"
],

"styles": [
  "src/styles.css"
],

"scripts": [
  "node_modules/fullpage.js/vendors/scrolloverflow.min.js"
],
```

## Dynamic Changes
If you want to update fullPage.js with new changes in the DOM call the `build()` method after making those changes.

An example can be seen on the [dynamic-changes example](https://github.com/alvarotrigo/angular-fullpage/blob/master/demo/app/examples/dynamic-changes/dynamic-changes.component.ts#L46):

```javacript
this.renderer.appendChild(this.fp_directive.nativeElement, section);
this.fullpage_api.build(); // <-- here
```

An example for *ngFor can be seen on the [dynamic-changes-with-ngFor example](https://github.com/alvarotrigo/angular-fullpage/blob/master/demo/app/examples/dynamic-ng-for/dynamic-ng-for.component.ts#L45):

```html
<div fullpage id="fullpage" [options]="config" (ref)="getRef($event)">
    <div *ngFor="let section of sections" class="section">
		  <h1>Section {{section}}</h1>
	</div>
</div>
```

## Examples
You can check some examples on the [`demo` folder](https://github.com/alvarotrigo/angular-fullpage/tree/master/demo).

## Contributing

Found an issue? Have an idea? Check out the [Contributing](https://github.com/alvarotrigo/angular-fullpage/blob/master/CONTRIBUTING.md) guide and open a PR

## Resources

- [Wordpress theme](https://alvarotrigo.com/fullPage/utils/wordpress.html)
- [fullpage.js Extensions](https://alvarotrigo.com/fullPage/extensions/)
- [CSS Easing Animation Tool - Matthew Lein](http://matthewlein.com/ceaser/) (useful to define the `easingcss3` value)
- [fullPage.js unpakg CDN](https://unpkg.com/fullpage.js)
- [fullPage.js jsDelivr CDN](http://www.jsdelivr.com/#!jquery.fullpage)
- [fullPage.js cdnJS CDN](https://cdnjs.com/libraries/fullPage.js)
- [fullPage.js documentation](https://github.com/alvarotrigo/fullPage.js)


