import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table-edit',
  templateUrl: './table-edit.component.html',
  styleUrls: ['./table-edit.component.css']
})
export class TableEditComponent implements OnInit {

  tableData: any;

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    this.tableData = history.state;
  }

  onClickSubmitForm(data: any) {
    this.http.put('http://localhost:8585/user/' + this.tableData.id, this.tableData).subscribe();
    this.router.navigate(['/']);

  }

}
