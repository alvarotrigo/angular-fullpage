import { AfterViewInit, OnDestroy, EventEmitter, Renderer2 } from '@angular/core';
import * as i0 from "@angular/core";
export declare class FullpageDirective implements AfterViewInit, OnDestroy {
    private platformId;
    private renderer;
    id: any;
    options: any;
    ref: EventEmitter<any>;
    fullpageApi: any;
    constructor(platformId: Object, renderer: Renderer2);
    ngAfterViewInit(): void;
    initFullpage(): void;
    addBuildFunction(): void;
    destroyFullpage(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<FullpageDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<FullpageDirective, "[fullpage]", never, { "id": "id"; "options": "options"; }, { "ref": "ref"; }, never>;
}
export declare class AnchorLinkDirective {
    href: string;
    onClick(event: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AnchorLinkDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<AnchorLinkDirective, "[href]", never, { "href": "href"; }, {}, never>;
}
