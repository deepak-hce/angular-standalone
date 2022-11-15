import { ReactiveFormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-generator',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form-generator.component.html',
  styleUrls: ['./form-generator.component.scss'],
})
export class FormGeneratorComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
