# angular-fullpage
Official Angular wrapper for fullPage.js

This project was generated with [Angular CLI] version 6.2.4.


//install fullpage.js

npm install fullpage.js


```typescript
import { AngularFullpageModule } from 'angular-fullpage';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFullpageModule //*** added
  ],
  providers: [],
  bootstrap: [AppComponent]
})
```

In your style.scss or component.scss

```css
@import url(~fullpage.js/dist/fullpage.min.css);
```

example include fullpage directive in your component

```typescript
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  config: any;
  fullpage_api: any;

  constructor() {

    this.config = {
      licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
      autoScrolling: true,
      sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', 'whitesmoke', '#ccddff'],
      anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', 'lastPage'],
      menu: '#menu',
      lazyLoad: true,
      afterLoad: () => {
        console.log('afterLoad');
      },
      afterRender: () => {
        console.log('afterRender');
      },
      afterResize: (width, height) => {
        console.log(width + ' ' + height);
      }
    };
  }

  getFullPage(fullPageRef) {
    this.fullpage_api = fullPageRef;
  }

}
```

```html
<div id="fullpage" fullpage [fullPageConfig]="config" (fullPageCreated)="getFullPage($event)">
    <div class="section">Some section1</div>
	<div class="section" (click)="fullpage_api.moveSectionDown()">Some section2</div>
	<div class="section">Some section3</div>
	<div class="section active" (click)="fullpage_api.moveTo('secondPage', 2)">Some section4</div>
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

In angular.json file

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