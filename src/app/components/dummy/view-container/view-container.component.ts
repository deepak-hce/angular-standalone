import { CommonService } from './../../../services/common.service';
import {
  ComponentName,
  ComponentType,
} from './../../../classes/ComponentTypeMap';
import {
  AfterViewInit,
  Component,
  Input,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';

@Component({
  selector: 'app-view-container',
  templateUrl: './view-container.component.html',
  styleUrls: ['./view-container.component.scss'],
})
export class ViewContainerComponent implements OnInit, AfterViewInit {
  @ViewChild('componentOutlet', { read: ViewContainerRef })
  componentOutlet!: ViewContainerRef;

  @Input() data: IViewContainerData | null = null;

  constructor(private commonService: CommonService) {}

  ngOnInit(): void {}

  async ngAfterViewInit() {
    if (this.componentOutlet && this.data) {
      this.componentOutlet.clear();
      const componentRef = this.componentOutlet.createComponent(
        await this.commonService.commonBus.componentTypeMap.getComponent(
          this.data.componentName,
          this.data.componentType
        )
      );
      (componentRef.instance as any).data = {
        commonService: this.commonService,
      };
    }
  }
}
export interface IViewContainerData {
  componentName: ComponentName;
  componentType: ComponentType;
}
