import {
  Directive,
  Input,
  HostListener,
  OnDestroy,
  ElementRef,
  Renderer2
} from '@angular/core';

import { TooltipService } from '../services/tooltip.service';

@Directive({
  selector: '[appTooltip]'
})
export class TooltipDirective implements OnDestroy {

  @Input() tooltipTitle: string = '';
  private id: number;
  container:Element;
  tooltipText:any;

  constructor(
    private tooltipService: TooltipService,
    private element: ElementRef,
    private renderer: Renderer2
  ){ }
  @HostListener('click', ['$event'])
  onClick(event:any): void {
    event.preventDefault();
    event.stopPropagation();
    console.log("insise", event)
    this.id = Math.random();
    const tooltipData = { 
      id: this.id,
      ref: this.element,
      title: this.tooltipTitle
    }
    this.tooltipService.addTooltip(tooltipData);
    this.tooltipService.isTooltipVisible = true;
  }
  
  ngOnDestroy(): void {
    this.destroy();
  }

  destroy(): void {
    this.tooltipService.isTooltipVisible = false;
    this.tooltipService.component = {};
  }

}