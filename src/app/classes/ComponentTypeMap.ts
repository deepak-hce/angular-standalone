export class ComponentTypeMap {
  constructor() {}

  static async getComponent(
    componentName: ComponentName,
    componentType: ComponentType
  ): Promise<any> {
    if (componentType === ComponentType.WIDGET) {
      switch (componentName) {
        case ComponentName.CHECKS:
          const { ChecksComponent } = await import(
            '../components/standalone/checks/checks.component'
          );
          return ChecksComponent;

        case ComponentName.CHECKS_V2:
          let { ChecksV2Component } = await import(
            '../components/standalone/checks-v2/checks-v2.component'
          );
          return ChecksV2Component;

        case ComponentName.CHECKS_V3:
          const { ChecksV3Component } = await import(
            '../components/standalone/checks-v3/checks-v3.component'
          );
          return ChecksV3Component;

        default:
          break;
      }
    } else {
      null;
    }
  }
}

export enum ComponentType {
  WIDGET = 'widgets',
  MODAL_TEMPLATES = 'modal-templates',
}

export enum ComponentName {
  CHECKS = 'checks',
  CHECKS_V2 = 'checks-v2',
  CHECKS_V3 = 'checks-v3',
}
