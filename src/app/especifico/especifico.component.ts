import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-especifico',
  imports: [],
  templateUrl: './especifico.component.html',
  styleUrl: './especifico.component.css'
})
export class EspecificoComponent implements OnInit {
  private http = inject(HttpClient)
  user: any;

  ngOnInit(): void {
    this.http.get<any>('https://localhost:5001/api/user').subscribe({
      next: response => this.user = response
    })
  }

}
