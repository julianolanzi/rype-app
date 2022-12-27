import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  isToggle: boolean = true;

  constructor() {}

  ngOnInit(): void {
    // let sidebar = document.getElementById('sidebar-app') as HTMLElement;
    // let header = document.querySelector('app-header') as HTMLElement;

    let list = document.querySelectorAll('.items');

    list.forEach((linkItem, index) => {
      linkItem.addEventListener('click', () => {
        document.querySelector('.active')?.classList.remove('active');
        linkItem.classList.add('active');
      });
    });

    let list2 = document.querySelectorAll('.items-mobile');

    list2.forEach((linkItemmob, index) => {
      linkItemmob.addEventListener('click', () => {
        // document.querySelector('.active')?.classList.remove('active');
        linkItemmob.classList.toggle('active');
      });
    });

  
  }

    
}
