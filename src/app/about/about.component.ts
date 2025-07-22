// // import { Component } from '@angular/core';

// // @Component({
// //   selector: 'about',
// //   templateUrl: './about.component.html',
// //   styleUrl: './about.component.css',
// // })
// // export class AboutComponent {}
// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-about',
//   templateUrl: './about.component.html',
//   styleUrls: ['./about.component.css'],
// })
// export class AboutComponent implements OnInit {
//   education = [
//     {
//       level: 'Under Graduation',
//       institution: 'SRM University',
//       duration: '2021 – 2025',
//       cgpa: '9.06',
//     },
//     {
//       level: 'Senior Secondary',
//       institution: 'La chatelaine junior college',
//       duration: '2020 – 2021',
//     },
//   ];

//   coursework = ['DSA', 'C', 'Java', 'C++', 'Angular', 'springboot'];

//   experiences = [
//     {
//       company: 'Visteon',
//       duration: 'Jan 2025 – July 2025',
//       location: 'Chennai, TN',
//       role: 'Software Engineer Intern',
//       tech: ['C++', 'Java', 'Appium', 'Iperf', 'AOSP'],
//       responsibilities: [
//         'Developed Appium + Python script to validate throughput in Android devices.',
//         'Used Linux `tc` with Java APIs to prioritize bandwidth for projection services.',
//         'Awarded in C/C++ hackathons; followed MISRA coding standards.',
//         'Validated automotive connections with Iperf and Android Studio.',
//       ],
//     },
//     {
//       company: 'VMG Digital',
//       duration: 'Dec 2023 – Jan 2024',
//       location: 'Chennai, TN',
//       role: 'Front End Developer Intern',
//       tech: ['JavaScript', 'TypeScript', 'Angular', 'Firebase'],
//       responsibilities: [
//         'Built employee portal frontend in Angular with login validations.',
//         'Used Firebase for real-time data sync across platforms.',
//         'Collaborated using Git for task and version management.',
//       ],
//     },
//   ];

//   constructor() {}

//   ngOnInit(): void {}
// }
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {
  graduation = {
    university: 'SRM University',
    year: '2021-2025',
    cgpa: 9.06,
  };

  experiences = [
    {
      company: 'Visteon',
      duration: 'Jan 2025 – July 2025',
      title: 'Software Engineer Intern',
      location: 'Chennai, TN',
      details: [
        'Automated throughput validation using Appium and Python in automotive environments.',
        'Dynamically allocated bandwidth using Java APIs in AOSP with Linux tc/HTB.',
        'Won hackathon by implementing core logic in C/C++ adhering to MISRA standards.',
        'Verified automotive bandwidth using Iperf and Android Studio.',
      ],
      tech: ['C++', 'Java', 'Appium', 'Iperf', 'AOSP'],
    },
    {
      company: 'VMG Digital',
      duration: 'Dec 2023 – Jan 2024',
      title: 'Frontend Developer Intern',
      location: 'Chennai, TN',
      details: [
        'Developed employee portal with Angular and Firebase.',
        'Managed user data across platforms using Google Firebase.',
        'Used Git for version control and team collaboration.',
      ],
      tech: ['JavaScript', 'TypeScript', 'Angular', 'Firebase'],
    },
  ];
}
