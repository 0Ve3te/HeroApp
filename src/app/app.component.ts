import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}

  ngOnInit() {
    if(localStorage.getItem('theme') != null) {
      let theme = localStorage.getItem('theme');
      document.body.setAttribute('color-theme', theme!);

      if(theme == 'dark') {
        document.getElementById('darkSegment')!.classList.add('segment-button-checked');
        document.getElementById('lightSegment')!.classList.remove('segment-button-checked');
      } else {
        document.getElementById('lightSegment')!.classList.add('segment-button-checked');
        document.getElementById('darkSegment')!.classList.remove('segment-button-checked');
      }

    }
  }

  public appPages = [
    { title: 'Heroes', url: '/heroes', icon: 'heart' },
    { title: 'Favorites Heroes', url: '/favorites', icon: 'heart' },
  ];

  toggleTheme(event:any) {
    if(event.detail.value != 'default') {
      document.body.setAttribute('color-theme', 'dark');
      document.getElementById('lightSegment')!.classList.remove('segment-button-checked');
      localStorage.setItem('theme', 'dark')
    } else {
      document.body.setAttribute('color-theme', 'light');
      document.getElementById('darkSegment')!.classList.remove('segment-button-checked');
      localStorage.setItem('theme', 'light')
    }
  }

}
