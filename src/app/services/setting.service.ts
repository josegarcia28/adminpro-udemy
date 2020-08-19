import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingService {

  private elemento = document.querySelector('#theme');

  constructor() { 
    const url = localStorage.getItem('theme') || `assets/css/colors/purple-dark.css`;
    this.elemento.setAttribute('href',url);
  }

  changeTheme(theme: string){
    const url = `assets/css/colors/${theme}.css`;
    this.elemento.setAttribute('href',url);
    localStorage.setItem('theme',url);
    this.checkCurrentTheme();
   
  }

  checkCurrentTheme() {
    const links = document.querySelectorAll('.selector');
    ///console.log(links);
    links.forEach(elem => {
      elem.classList.remove('working');
      const btnTheme = elem.getAttribute('data-theme');
      const btnThemeUrl = `assets/css/colors/${btnTheme}.css`;
      const currentTheme = this.elemento.getAttribute('href');
        
      if(btnThemeUrl === currentTheme) {
          elem.classList.add('working');
      }
    })
  }
}
