import { Component, OnInit } from '@angular/core';
import { FormGeneratorComponent } from '../../shared/form-generator/form-generator.component';

@Component({
  selector: 'app-checks-v3',
  standalone: true,
  imports: [FormGeneratorComponent],
  templateUrl: './checks-v3.component.html',
  styleUrls: ['./checks-v3.component.scss'],
})
export class ChecksV3Component implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
