import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { onAuthStateChanged } from 'firebase/auth';
// import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  viewCount: number = 0;

  isAuthenticated = false;

  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onSubmit(form: any): void {
    const formData = form.value;

    this.http.post('http://localhost:3000/contact', formData).subscribe({
      next: (response) => {
        console.log('Message sent successfully', response);
      },
      error: (error) => {
        console.log('Error sending message', error);
      },
      complete: () => {
        console.log('Request completed');
      },
    });
  }
}
