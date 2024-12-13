import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-especifico',
  templateUrl: './especifico.component.html',
  styleUrls: ['./especifico.component.css']
})
export class EspecificoComponent implements OnInit {
  private http = inject(HttpClient)
  user: any;


  ngOnInit(): void {
    this.http.get('https://localhost:5001/api/user').subscribe({
      next: response => {
        this.user = response;
      },
      error: error => console.log(error)
    });
  }
}
