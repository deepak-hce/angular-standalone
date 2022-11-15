import { Component, OnInit } from '@angular/core';
import { TableGeneratorComponent } from '../../shared/table-generator/table-generator.component';
import { FormGeneratorComponent } from '../../shared/form-generator/form-generator.component';

@Component({
  selector: 'app-checks-v2',
  standalone: true,
  imports: [TableGeneratorComponent, FormGeneratorComponent],
  templateUrl: './checks-v2.component.html',
  styleUrls: ['./checks-v2.component.scss'],
})
export class ChecksV2Component implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
