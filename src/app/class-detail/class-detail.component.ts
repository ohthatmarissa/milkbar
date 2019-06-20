import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Class } from '../class.model';
import { ClassService } from '../class.service';
import { FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-class-detail',
  templateUrl: './class-detail.component.html',
  styleUrls: ['./class-detail.component.css']
})
export class ClassDetailComponent implements OnInit {
  classId: string;
  classToDisplay;
  

  constructor(private route: ActivatedRoute, private location: Location, private classService: ClassService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.classId = urlParameters['id'];
     
    });
    this.classToDisplay = this.classService.getClassById(this.classId);
  }

}
