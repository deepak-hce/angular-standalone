import { Component, OnInit } from '@angular/core';
import { TableGeneratorComponent } from '../../shared/table-generator/table-generator.component';

@Component({
  selector: 'app-checks',
  templateUrl: './checks.component.html',
  styleUrls: ['./checks.component.scss'],
  imports: [TableGeneratorComponent],
  standalone: true,
})
export class ChecksComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
