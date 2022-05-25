import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from "@angular/core";

@Directive({
    selector: "[highlighter]"
})
export class HighLighterDirective implements OnInit {
    @Input() defaultColor = "#19d1c8";
    @Input() highlightColor = "#75FF33";
    @HostBinding("style.backgroundColor") backgroundColor: string = this.defaultColor;
    //constructor( private elementRef: ElementRef ){};
    constructor( private elementRef: ElementRef, private renderer: Renderer2){};
    ngOnInit(): void {
        // this.elementRef.nativeElement.style.backgroundColor = "#75FF33";
        this.elementRef.nativeElement.style.padding = "10px";
        this.renderer.setStyle(this.elementRef.nativeElement, "border", "5px solid blue");
    }

    @HostListener("mouseenter") mouseover(eventData: Event) {
        // this.renderer.setStyle(this.elementRef.nativeElement, "background-color", "#75FF33");
        this.backgroundColor = this.highlightColor;
    }

    @HostListener("mouseleave") mouseleave(eventData: Event) {
        // this.renderer.setStyle(this.elementRef.nativeElement, "background-color", "transparent");
        this.backgroundColor = this.defaultColor;
    }
} 