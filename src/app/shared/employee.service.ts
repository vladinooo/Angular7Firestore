import { Injectable } from '@angular/core';
import {Employee} from './employee.model';
import {AngularFirestore, DocumentChangeAction} from '@angular/fire/firestore';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  formData: Employee;

  constructor(private firestore: AngularFirestore) { }

  public getEmployees() {
    return this.firestore.collection('employees').snapshotChanges();
  }
}
