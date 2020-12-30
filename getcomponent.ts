import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employees.service';
import { AddEmployeeService } from 'src/app/services/addemployee.service';
import { UpdateEmployeeService } from 'src/app/services/updateemployee.service';
import { DeleteEmployeeService } from 'src/app/services/deleteemployee.service';
import errHandling from "../../config/error/errorHandling";

// MatTableDataSource class used to make the data suitable to material table
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-employee-get-detail',
  templateUrl: './employee-get-detail.component.html',
  styleUrls: ['./employee-get-detail.component.css']
})
export class EmployeeGetDetailComponent implements OnInit {
  public records:any;
  public obj:any;

  // public displayedColumns: string[] = [
  //   'Employee Name',
  //   'Age',
  //   'salary',
  //   'Phone Number',
  //   'Actions',
  // ];


  public dataSource:MatTableDataSource<any>;
  constructor(public allEmployeesService:EmployeeService,
              public addEmployeeService:AddEmployeeService,
              public updateEmployeeService:UpdateEmployeeService,
              public deleteEmployeeService:DeleteEmployeeService) { }

  ngOnInit(): void {
   this.allEmployeesService.getEmployees().subscribe((posRes)=>{
      this.records= posRes;
      // this.dataSource= new MatTableDataSource(this.records);
   },errHandling)
  }
  
  ngOnDestroy() {
    this.obj.unsubscribe();
  };


}
