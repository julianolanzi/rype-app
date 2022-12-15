
import { Injectable } from "@angular/core";


@Injectable({
    providedIn: 'root'
})
export class CarregaJS {
  constructor() {}

  carregaJS(arquivos:string[]){
    for(let arquivo of arquivos){
        let scripts = document.createElement("script") as unknown as HTMLImageElement;
        scripts.src = "./assets/js/" + arquivo + ".js";
        let body = document.getElementsByTagName("body")[0];
        body.appendChild(scripts);
    }
  }
}
