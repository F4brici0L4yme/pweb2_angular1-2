import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafePipe } from '../safe.pipe';

@Component({
  selector: 'app-videos',
  standalone: true,
  imports: [CommonModule, SafePipe],
  templateUrl: './videos.component.html',
  styleUrl: './videos.component.css'
})
export class VideosComponent {
  videoUrl: string = 'https://www.youtube.com/embed/dQw4w9WgXcQ';
}
