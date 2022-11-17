import { Injectable } from '@angular/core';
import { ComponentTypeMap } from '../classes/ComponentTypeMap';
import { componentPath } from '../data/component-path';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  commonBus = {
    componentTypeMap: ComponentTypeMap,
  };

  constructor() {}
}
