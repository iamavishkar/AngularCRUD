import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table-add',
  templateUrl: './table-add.component.html',
  styleUrls: ['./table-add.component.css']
})
export class TableAddComponent implements OnInit {

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
  }

  onClickSubmitForm(data: any) {
    this.http.post('http://localhost:8585/user', data).subscribe();
    this.router.navigate(['/']);
  }

}
