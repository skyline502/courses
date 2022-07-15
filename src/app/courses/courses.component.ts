import { Component, OnInit } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
  selector: 'app-courses',
  template: `
  <h2>{{title}}</h2>
  <ul>
    <li *ngFor='let course of courses'>
      {{ course }}
    </li>
  </ul>
  `
})
export class CoursesComponent implements OnInit {
  title = "List of Courses";
  courses;
  constructor() { 
    let service = new CoursesService();
    this.courses = service.getCourses();
  }

  ngOnInit(): void {
  }

}
