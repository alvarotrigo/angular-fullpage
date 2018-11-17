declare module 'fullpage.js/dist/fullpage.extensions.min' {
    export default function(containerSelector: string, options: options): void;

    export interface options {
        anchors?: string[];
        animateAnchor?: boolean;
        autoScrolling?: boolean;
        bigSectionsDestination?: any; //top, bottom, null
        continuousHorizontal?: boolean;
        continuousVertical?: boolean;
        controlArrowColor?: string;
        controlArrows?: boolean;
        css3?: boolean;
        dragAndMove?: any; //true, false, 'horizontal', 'fingersonly'
        easing?: string;
        easingcss3?: string;
        fadingEffect?: any; //true, false, 'sections', 'slides'
        fitToSection?: boolean;
        fitToSectionDelay?: number;
        fixedElements?: string; // '#header, .footer'
        hybrid?: boolean;
        interlockedSlides?: any; // true, false, [1, 3, 5]
        keyboardScrolling?: boolean;
        lazyLoading?: boolean;
        licenseKey?: string;
        lockAnchors?: boolean;
        loopBottom?: boolean;
        loopHorizontal?: boolean;
        loopTop?: boolean;
        menu?: string;
        navigation?: boolean;
        navigationPosition?: string;
        navigationTooltips?: string[]; // ['firstSlide', 'secondSlide']
        normalScrollElementTouchThreshold?: number;
        normalScrollElements?: string; // '#element1, .element2',
        offsetSections?: boolean;
        paddingBottom?: string;
        paddingTop?: string;
        parallax?: any; // true, false, 'sections', 'slides'
        parallaxOptions?: {
            percentage?: number;
            property?: string;
            type?: string;
        };
        recordHistory?: boolean;
        resetSliders?: boolean;
        responsive?: number;
        responsiveHeight?: number;
        responsiveSlides?: boolean;
        responsiveWidth?: number;
        scrollBar?: boolean;
        scrollHorizontally?: boolean;
        scrollOverflow?: boolean;
        scrollOverflowHandler?: any;
        scrollOverflowOptions?: any;
        scrollOverflowReset?: boolean;
        scrollingSpeed?: number;
        sectionSelector?: string;
        sectionsColor?: string[];
        showActiveTooltip?: boolean;
        slideSelector?: string;
        slidesNavPosition?: string;
        slidesNavigation?: boolean;
        touchSensitivity?: number;
        v2compatible?: boolean;
        verticalCentered?: boolean;

        /* callback and events */
        afterLoad?(origin? :any, destination? :any, direction? :any): void;
        afterRender?(): void;
        afterResize?(width: number, height: number): void;
        afterReBuild?(): void;
        afterResponsive?(isResponsive?: any): void;
        afterSlideLoad?(section? :any, origin? :any, destination? :any, direction? :any): void;
        onLeave?(origin? :any, destination? :any, direction? :any): void;
        onSlideLeave?(section? :any, origin? :any, destination? :any, direction? :any): void;
        
        /* keys for extensions */
        fadingEffectKey?: string;
        responsiveSlidesKey?: string;
        continuousHorizontalKey?: string;
        interlockedSlidesKey?: string;
        scrollHorizontallyKey?: string;
        resetSlidersKey?: string;
        offsetSectionsKey?: string;
        dragAndMoveKey?: string;
        parallaxKey?: string;
        /* end key sections */
    }

    export interface fullpage_api {
        continuousHorizontal: any;
        dragAndMove: any;
        fadingEffect: any;
        interlockedSlides: any;
        offsetSections: any;
        parallax: any;
        resetSliders: any;
        responsiveSlides: any;
        scrollHorizontally: any;
        scrollOverflowReset: any;
        version: string;
        destroy(n?: any): void;
        fitToSection(): void;
        getActiveSection(): any;
        getActiveSlide(): any;
        getFullpageData(): any;
        landscapeScroll(e?: any, t?: any, n?: any): void;
        moveSectionDown(): void;
        moveSectionUp(): void;
        moveSlideLeft(e?: any): void;
        moveSlideRight(e?: any): void;
        moveTo(e?: any, t?: any): void;
        reBuild(t?: any): void;
        setAllowScrolling(e?: any, t?: any): void;
        setAutoScrolling(e?: any, t?: any): void;
        setFitToSection(e?: any, t?: any): void;
        setKeyboardScrolling(e?: any, t?: any): void;
        setLockAnchors(e?: any): void;
        setMouseWheelScrolling(n?: any): void;
        setRecordHistory(e?: any, t?: any): void;
        setResponsive(e?: any): void;
        setScrollingSpeed(e?: any, t?: any): void;
        silentMoveTo(e?: any, t?: any): void;
        shared: {
            afterRenderActions(): void;
        }
        test: {
            left: number[];
            top: string;
            translate3d: string;
            translate3dH: string[];
            setAutoScrolling(e?: any, t?: any): void;
            options: options;
        }
    }
}