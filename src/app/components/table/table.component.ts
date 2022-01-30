import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  tableList: any;
  userId: any;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {

    this.http.get('http://localhost:8585/users').subscribe(
      data => {
        this.tableList = data;
      }
    )

  }

  editBtn(data: any) {
    this.userId = data;
    this.router.navigate(['/edit'], { state: data });
    //this.http.get('http://localhost:8585/user/' + data).subscribe();
  }

  deleteBtn(data: any) {
    this.http.delete('http://localhost:8585/user/' + data).subscribe();
  }

}
