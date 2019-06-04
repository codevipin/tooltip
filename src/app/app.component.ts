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
    if(event.target.id !== 'tooltip-content') {
      this.tooltipService.clearTooltip();
    }
  }
  @HostListener('window:keyup', ['$event'])
  onKeyUp(event: KeyboardEvent): void {
    if(event.keyCode === 27) {
      console.log("ESC key pressed", event.keyCode)
      this.tooltipService.clearTooltip();
    } 
  }
}
