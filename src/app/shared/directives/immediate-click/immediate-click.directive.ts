import { PlatformDetectorService } from './../../../core/plataform-detector/platform-detector.service';
import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[immediateClick]'
})
export class ImmediateClickDirective implements OnInit {

  constructor(
    private elementRef: ElementRef<any>,
    private platformDetector: PlatformDetectorService) { }

    ngOnInit(): void {
      this.platformDetector.isPlatformBrowser &&
      this.elementRef.nativeElement.click();
    }
}
