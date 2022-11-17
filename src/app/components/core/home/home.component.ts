import { ComponentType } from './../../../classes/ComponentTypeMap';
import { IViewContainerData } from './../../dummy/view-container/view-container.component';
import {
  AfterViewInit,
  Component,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { ComponentName } from 'src/app/classes/ComponentTypeMap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChild('componentOutlet', { read: ViewContainerRef })
  componentOutlet!: ViewContainerRef;
  componentBoolean: number = 1;
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

  ngOnInit(): void {
    console.log('hello world');
  }

  ngAfterViewInit(): void {}
}
