import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDivider } from '@angular/material/divider';

@Component({
  selector: 'app-courses',
  imports: [CommonModule, MatDivider],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss',
})
export class CoursesComponent {}
