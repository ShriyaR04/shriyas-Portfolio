import { Component, OnInit } from '@angular/core';
import { Project } from './project.model';
import {
  faHtml5,
  faCss3Alt,
  faAngular,
  faNodeJs,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'], // Changed from styleUrl to styleUrls
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [
    {
      imageUrl: 'assets/images/project1.png',
      title: 'Do-It-Now',
      description:
        'Effortlessly add, edit, and delete your tasks to stay organized and productive.',
      tags: ['nodejs', 'typescript', 'angular'],
    },

    {
      imageUrl: 'assets/images/project2.png',
      title: 'Weather-App',
      description:
        'Get real-time weather updates for any location with this intuitive WeatherApp.',
      tags: ['html5', 'css3', 'javascript', 'react'],
    },
    {
      imageUrl: 'assets/images/project3.png',
      title: 'Waste Management using AI Sorting',
      description:
        'Revolutionizing waste management with AI-driven sorting for a cleaner, greener future',
      tags: ['sensors', 'CNN', 'computer vision'],
    },
    {
      imageUrl: 'assets/MovieVerse.png',
      title: 'MovieVerse',
      description:
        'One stop solution on what to watch when you are bored - get reviews, ratings and where to watch it',
      tags: ['React', 'TMDB API', 'JavaScript'],
    },
  ];

  tagIcons = {
    html5: faHtml5,
    css3: faCss3Alt,

    angular: faAngular,

    nodejs: faNodeJs,
  };

  constructor() {}

  ngOnInit(): void {}
}

// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-projects',
//   templateUrl: './projects.component.html',
//   styleUrls: ['./projects.component.css'],
// })
// export class ProjectsComponent implements OnInit {
//   projects = [
//     {
//       title: 'Project A',
//       description: 'Description of Project A',
//       imageUrl: 'https://via.placeholder.com/300x200',
//       link: 'https://example.com',
//     },
//     {
//       title: 'Project B',
//       description: 'Description of Project B',
//       imageUrl: 'https://via.placeholder.com/300x200',
//       link: 'https://example.com',
//     },
//   ];

//   constructor() {}

//   ngOnInit(): void {
//     console.log('Loaded Projects:', this.projects); // debug log
//   }
// }
