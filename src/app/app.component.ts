import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { CardComponent } from "./card/card.component";
import { EspecificoComponent } from "./especifico/especifico.component";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LoginComponent, CardComponent, EspecificoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'banco-de-talentos-PAQ';
  private http = inject(HttpClient)
  user: any;

  ngOnInit(): void {
    this.http.get('https://localhost:5001/api/user').subscribe({
      next: response => this.user = response
    })
  }
}
