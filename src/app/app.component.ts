import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TodoListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'todos-app';

  meta = inject(Meta);

  constructor() {
    this.meta.addTag({ name: 'viewport', content: 'width=device-width, initial-scale=1' });
    this.meta.addTag({ name: 'icon', content: 'image/x-icon', href: 'favicon.ico' });
    this.meta.addTag({ name: 'canonical', content: 'https://todos-app-manthanank.vercel.app/' });
    this.meta.addTag({ property: 'og:title', content: 'Todos App' });
    this.meta.addTag({ name: 'author', content: 'Manthan Ankolekar' });
    this.meta.addTag({ name: 'keywords', content: 'angular, nodejs, express, mongodb' });
    this.meta.addTag({ name: 'robots', content: 'index, follow' });
    this.meta.addTag({ property: 'og:description', content: 'A simple Todos App built using Angular, Node.js, Express, and MongoDB. It allows you to add, delete, and update todos.' });
    this.meta.addTag({ property: 'og:image', content: 'https://todos-app-manthanank.vercel.app/image.jpg' });
    this.meta.addTag({ property: 'og:url', content: 'https://todos-app-manthanank.vercel.app/' });
  }
}
