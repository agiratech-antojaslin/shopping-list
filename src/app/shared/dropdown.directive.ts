import { 
    Directive, 
    HostBinding, 
    HostListener,
    Renderer2,
    ElementRef
} from "@angular/core";

@Directive({
    selector: "[appDropdown]"
}) 
export class DropdownDirective {

    constructor(private el: ElementRef,
        private renderer: Renderer2) {}

    @HostBinding("class.show") isShown = false;

    @HostListener("click") toggleShow() {
        let menu = this.el.nativeElement.querySelector(".dropdown-menu");
        if(!this.isShown) {
            this.renderer.addClass(menu, 'show');
        } else {
            this.renderer.removeClass(menu, 'show');
        }
        
        this.isShown = !this.isShown;
    }
}