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
  constructor(private tooltipService: TooltipService) { }
  @Input() title: string;
  @Input() ref: any;

  @ViewChild('tooltipContent') tooltipContent: ElementRef

  ngAfterViewInit(): void {

  }

  ngOnChanges():void {
    const elementPosition = this.ref.nativeElement.getBoundingClientRect();
    setTimeout(()=> {
      this.top = elementPosition.top - 35;
      this.left = elementPosition.left + 10;
    })
  }

  @HostListener('window:resize')
  onWindowResize(): void {
    // update position based on `ref`
    console.log("here is the refernce to element on window size change", this.ref)
  }

}
