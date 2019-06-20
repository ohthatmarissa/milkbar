import { Injectable } from '@angular/core';
import { Class } from './class.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class ClassService {
  classes: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) { 
    this.classes = database.list('classes');
  }


  getClasses(){
    return this.classes;
  }

  getClassById(classId: string) {
    return this.database.object('classes/' + classId);
  }
}