import { OnInit, OnDestroy, EventEmitter, Renderer2 } from '@angular/core';
export declare class FullpageDirective implements OnInit, OnDestroy {
    private platformId;
    private renderer;
    id: any;
    options: any;
    ref: EventEmitter<{}>;
    fullpage_api: any;
    constructor(platformId: Object, renderer: Renderer2);
    ngOnInit(): void;
    initFullpage(): void;
    addBuildFunction(): void;
    destroyFullpage(): void;
    ngOnDestroy(): void;
}
export declare class AnchorLinkDirective {
    href: string;
    onClick(event: any): void;
}
