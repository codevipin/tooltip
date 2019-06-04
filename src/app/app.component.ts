import { Component, HostListener } from '@angular/core';
import { TooltipService } from './services/tooltip.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'xello';

  constructor(private tooltipService:TooltipService) {}
  @HostListener('click', ['$event'])
  onclick(event:any) {
    console.log("parent clicled")
    if(event.target.id !== 'tooltip-content') {
      this.tooltipService.clearTooltip();
    }
  }
  @HostListener('window:keyup', ['$event'])
  onKeyUp(event: KeyboardEvent): void {
    console.log(event.keyCode)
    if(event.keyCode === 27) {
      this.tooltipService.clearTooltip();
    } 
  }
}
