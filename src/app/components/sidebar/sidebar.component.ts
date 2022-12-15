import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  constructor() {}

  ngOnInit(): void {
    let toogle = document.querySelector('.app-sidebar-toggle') as HTMLElement;
    let sidebar = document.querySelector('.app-sidebar') as HTMLElement;
    let wrapper = document.querySelector('.app-wrapper') as HTMLElement;
    let header = document.querySelector('.app-header') as HTMLElement;
    let text_logo = document.getElementById('text-logo') as HTMLElement;

    toogle.addEventListener('click', () => {
      sidebar.classList.toggle('close');
      wrapper.classList.toggle('close-sidebar');
      header.classList.toggle('close-sidebar');
      text_logo.classList.toggle('text-logo-close');
    });

    let menu_toogle = document.getElementById(
      'menu-toogle-feed'
    ) as HTMLElement;
    let menu_item_feed = document.getElementById(
      'menu-item-feed'
    ) as HTMLElement;

    menu_toogle.addEventListener('click', () => {
      menu_item_feed.classList.toggle('show');
    });

    let menu_clan = document.getElementById('menu-toogle-clan') as HTMLElement;
    let menu_item_clan = document.getElementById(
      'menu-item-clan'
    ) as HTMLElement;

    menu_clan.addEventListener('click', () => {
      menu_item_clan.classList.toggle('show');
    });

    let menu_perfil = document.getElementById(
      'menu-toogle-perfil'
    ) as HTMLElement;
    let menu_item_perfil = document.getElementById(
      'menu-item-perfil'
    ) as HTMLElement;

    menu_perfil.addEventListener('click', () => {
      menu_item_perfil.classList.toggle('show');
    });

    let menu_treinos = document.getElementById(
      'menu-toogle-treinos'
    ) as HTMLElement;
    let menu_item_treinos = document.getElementById(
      'menu-item-treinos'
    ) as HTMLElement;

    menu_treinos.addEventListener('click', () => {
      menu_item_treinos.classList.toggle('show');
    });

    let menu_eventos = document.getElementById(
      'menu-toogle-eventos'
    ) as HTMLElement;
    let menu_item_eventos = document.getElementById(
      'menu-item-eventos'
    ) as HTMLElement;

    menu_eventos.addEventListener('click', () => {
      menu_item_eventos.classList.toggle('show');
    });

    let menu_suporte = document.getElementById(
      'menu-toogle-suporte'
    ) as HTMLElement;
    let menu_item_suporte = document.getElementById(
      'menu-item-suporte'
    ) as HTMLElement;

    menu_suporte.addEventListener('click', () => {
      menu_item_suporte.classList.toggle('show');
    });
  }
}
