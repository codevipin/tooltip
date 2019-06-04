import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TooltipService {

  isTooltipVisible:boolean = false;
  component: any = {};

  constructor() { }

  removeTooltip(id:number) {
    if(this.isTooltipVisible && this.component.id === id) {
      this.component = {};
      this.isTooltipVisible = false;
    }
  }

  clearTooltip() {
    this.component = {};
    this.isTooltipVisible = false;
  }

  addTooltip(data:any = {}) {
    this.clearTooltip();
    this.component = data;
  }
}
