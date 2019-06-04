import {
  Component,
  AfterViewInit,
  Input,
  HostListener,
  OnChanges,
  ViewChild,
  ElementRef,
  Renderer2
} from '@angular/core';

import { TooltipService } from 'src/app/services/tooltip.service';

@Component({
  selector: 'tooltip-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements AfterViewInit, OnChanges {
  top:number;
  left:number;
  arrowClass:string;
  private atBottom:boolean = false;
  private atTop:boolean = false;
  constructor(private tooltipService: TooltipService) { }
  @Input() title: string;
  @Input() ref: any;

  @ViewChild('tooltipContent') tooltipContent: ElementRef

  ngAfterViewInit(): void {

  }

  private alignTop(elementPosition) {
    setTimeout(()=> {
      console.log(elementPosition)
      this.arrowClass = 'down-arrow';
      this.top = elementPosition.top - 35;
      this.left = elementPosition.left + 10;
      this.atBottom =  false;
      this.atTop = true;
    })
  }
  private alignBottom(elementPosition) {
    setTimeout(()=> {
      const parentRect = this.ref.nativeElement.offsetParent.getBoundingClientRect();
      this.arrowClass = 'up-arrow';
      this.top = elementPosition.top - parentRect.top + elementPosition.height + 35
      this.left = elementPosition.left + 10;
      this.atBottom = true;
      this.atTop = false;
    })
  }

  private updateTooltipPosition() {
    const rect = this.ref.nativeElement.getBoundingClientRect();
    if(!this.atBottom && rect.top < 0) {
      console.log("aligning bottom")
      this.alignBottom(rect);
    } else if(!this.atTop && rect.top > 80) {
      console.log("aligning top")
      this.alignTop(rect)
    }
  }

  private reset() {
    this.atBottom = false;
    this.atTop = false;
  }


  ngOnChanges():void {
    this.reset();
    this.updateTooltipPosition();
  }

  @HostListener('window:scroll')
  onWindowResize(): void {
    // update position based on `ref`
    this.updateTooltipPosition();
  
  }

}
