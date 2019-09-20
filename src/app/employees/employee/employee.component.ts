import {Component, OnInit} from '@angular/core';
import {EmployeeService} from '../../shared/employee.service';
import {NgForm} from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';
import {AuthService} from '../../auth.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private service: EmployeeService,
              private firestore: AngularFirestore,
              private toastr: ToastrService,
              public auth: AuthService) { }

  ngOnInit() {
    this.resetForm();
  }

  public resetForm(form?: NgForm) {
    if (form != null) {
      form.resetForm();
    }

    this.service.formData = {
      id: null,
      fullName: '',
      position: '',
      employeeCode: '',
      mobile: ''
    };

  }

  public onSubmit(form: NgForm) {
    const data = Object.assign({}, form.value);
    // delete employee ID as we don't need it for saving
    delete data.id;

    if (form.value.id == null) {
      this.firestore.collection('employees').add(data);
    } else {
      this.firestore.doc('employees/' + form.value.id).update(data);
    }

    this.resetForm(form);
    this.toastr.success('Submitted successfully', 'Employee register');
  }

}
