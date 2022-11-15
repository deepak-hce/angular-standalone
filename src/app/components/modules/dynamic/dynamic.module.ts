import { ComponentFactory, ComponentFactoryResolver, NgModule, ViewContainerRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../../core/home/home.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
})
export class DynamicModule {
  constructor(private componentFactoryResolver: ViewContainerRef) { }

  public resolveComponent() {
    return HomeComponent;
  }
 }
