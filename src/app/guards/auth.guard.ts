import { RegisterService } from 'src/app/services/register.service';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { LocalStorageUtils } from '../utils/localstorage';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  localStorageUtils = new LocalStorageUtils();

  constructor(private authService: RegisterService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {

    if(!this.localStorageUtils.obterTokenUsuario()){
      this.router.navigate(['/auth'])
    }
    return true;
  }
}
