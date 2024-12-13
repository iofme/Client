import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-component',
  imports: [],
  templateUrl: './video-component.component.html',
  styleUrl: './video-component.component.css'
})
export class VideoComponentComponent implements OnInit {
  private http = inject(HttpClient)
  videoUrl: any;

  ngOnInit(): void {
    this.http.get('https://localhost:5001/api/user').subscribe({
      next: response => this.videoUrl = response
    })
  }
}