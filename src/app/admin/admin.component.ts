import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

	results: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // Make the HTTP request:
    this.http.get('/submissions').subscribe(data => {
      // Read the result field from the JSON response.
      console.log('DATA',data);
      this.results = data;
    });
  }

}


