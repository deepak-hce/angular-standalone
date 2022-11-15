import {
  AfterViewInit,
  Component,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChild('componentOutlet', { read: ViewContainerRef })
  componentOutlet!: ViewContainerRef;
  componentBoolean: number = 1;

  constructor() {}

  ngOnInit(): void {
    console.log('hello world');
  }

  ngAfterViewInit(): void {
    this.componentBoolean = 1;
    this.loadComponent();
  }

  async loadComponent() {
    if (this.componentBoolean === 1) {
      console.log('...loading component........V1');
      const { ChecksComponent } = await import(
        '../../standalone/checks/checks.component'
      );
      this.componentOutlet.clear();
      this.componentOutlet.createComponent(ChecksComponent);
    } else if (this.componentBoolean === 2) {
      console.log('...loading component........V2');
      const { ChecksV2Component } = await import(
        '../../standalone/checks-v2/checks-v2.component'
      );
      this.componentOutlet.clear();
      this.componentOutlet.createComponent(ChecksV2Component);
    } else {
      console.log('...loading component........V3');
      const { ChecksV3Component } = await import(
        '../../standalone/checks-v3/checks-v3.component'
      );
      this.componentOutlet.clear();
      this.componentOutlet.createComponent(ChecksV3Component);
    }
  }
}
