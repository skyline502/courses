import { Component, OnInit } from '@angular/core';
import { CoursesService } from './courses.service';


@Component({
  selector: 'app-courses',
  template: `
  <h2>{{title}}</h2>
  <ul class='list'>
    <li *ngFor='let course of courses'>
      {{ course }}
    </li>
  </ul>
  `,
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  title = "List of Courses";
  courses;
  constructor(service: CoursesService) { //good implementation
    // let service = new CoursesService(); bad implementation
    this.courses = service.getCourses();
  }

  ngOnInit(): void {
  }

}
