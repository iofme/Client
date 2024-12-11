import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-component',
  imports: [],
  templateUrl: './video-component.component.html',
  styleUrl: './video-component.component.css'
})
export class VideoComponentComponent implements OnInit {
  videoUrl: string | null = null;

  ngOnInit(): void {
    this.videoUrl
  }
}
