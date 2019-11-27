import { Component } from '@angular/core';

@Component({
  selector: 'app-list-courses',
  templateUrl: './list-courses.component.html',
  styleUrls: ['./list-courses.component.css']
})
export class ListCoursesComponent{

myCourse: string = 'learn Angular';
n1:number=0;
n2:number=0;

courses: string[]=['Angular','Spring','Laravel'];
addCourse(){
  if  (this.myCourse.length >0 )
  {
   // this.courses.unshift(this.myCourse);
    this.courses.push(this.myCourse);
   this.myCourse="";
  }

  
}
}
