import { Directive, ElementRef, Input, Renderer2 } from "@angular/core";
import * as DOMPurify from 'isomorphic-dompurify';

@Directive({
    selector: '[innerhtml]',
})
export class InnerHtmlDirective {
    // https://github.com/cure53/DOMPurify#can-i-configure-dompurify
    private readonly CONFIG = {
        ADD_ATTR: [],
        FORBID_ATTR: []
    };

    constructor(
        private el: ElementRef<HTMLElement>,
        private renderer: Renderer2,
    ) { }

    @Input() set innerhtml(html: string) {
        if (!html) throw new Error('[safehtml] error, html is invalid');
        const cleanHtml = DOMPurify.sanitize(html, this.CONFIG);
        this.renderer.setProperty(this.el.nativeElement, 'innerHTML', cleanHtml)
    }
}