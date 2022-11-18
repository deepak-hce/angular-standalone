import { ComponentType } from './../../../classes/ComponentTypeMap';
import { IViewContainerData } from './../../dummy/view-container/view-container.component';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ComponentName } from 'src/app/classes/ComponentTypeMap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, AfterViewInit {
  containerData: IViewContainerData[] = [
    {
      componentName: ComponentName.CHECKS,
      componentType: ComponentType.WIDGET,
    },
    {
      componentName: ComponentName.CHECKS_V2,
      componentType: ComponentType.WIDGET,
    },
    {
      componentName: ComponentName.CHECKS_V3,
      componentType: ComponentType.WIDGET,
    },
  ];
  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {}
}
