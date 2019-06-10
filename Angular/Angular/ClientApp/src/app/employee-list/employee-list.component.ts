import { Component, OnInit,   Inject, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  displayedColums: string[] = ['name', 'surname'];
  dataSource: MatTableDataSource<Employee>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  baseUrl: string;



  constructor( private http: HttpClient, @Inject('BASE_URL') baseUrl: string)
  {
    this.baseUrl = baseUrl;

}

  ngOnInit()
{
  this.http.get<Employee[]>(this.baseUrl + 'api/Employee').subscribe(result => {
      this.dataSource = new MatTableDataSource<Employee>(result);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;

    },
    error => console.error(error));
}

}
interface Employee {
  id: number,
  name: string,
  surmane : string;
}
