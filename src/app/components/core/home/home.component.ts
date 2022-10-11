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

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.loadComponent();
  }

  async loadComponent() {
    console.log('...loading component........V2');
    const { ChecksComponent } = await import(
      '../../standalone/checks/checks.component'
    );
    this.componentOutlet.clear();
    this.componentOutlet.createComponent(ChecksComponent);
  }
}
