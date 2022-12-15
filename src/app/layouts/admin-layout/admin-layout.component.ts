import { Component } from '@angular/core';
import { CarregaJS } from 'src/app/services/carrega.js.service';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent {

  constructor(private ServiceJS: CarregaJS){
    ServiceJS.carregaJS([]);
  }
  
  ngOnInit(): void {
   
  }

}
