import { Component, OnInit } from '@angular/core';
import { TooltipService } from 'src/app/services/tooltip.service';

@Component({
  selector: 'tooltip-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {

  constructor(private tooltipService: TooltipService) { }

  ngOnInit() {
  }

}
