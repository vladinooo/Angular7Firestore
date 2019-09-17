import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../../shared/employee.service';
import {Employee} from '../../shared/employee.model';
import {AngularFirestore} from '@angular/fire/firestore';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[];
  constructor(private employeeService: EmployeeService,
              private firestore: AngularFirestore,
              private toastr: ToastrService) { }

  ngOnInit() {
    this.employeeService.getEmployees().subscribe(actionArray => {
      this.employees = actionArray.map(employee => {
        return {
          id: employee.payload.doc.id,
          ...employee.payload.doc.data()
        } as Employee;
      });
    });
  }

  public onEdit(employee: Employee) {
    this.employeeService.formData = Object.assign({}, employee);
  }

  public onDelete(id: string) {
    if (confirm('Are you sure to delete this record?')) {
      this.firestore.doc('employees/' + id).delete();
      this.toastr.warning('Deleted successfully', 'Employee register');
    }
  }
}
