import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { UserLogin } from 'src/app/models/user-login';
import { RegisterService } from 'src/app/services/register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent {
  loginForm!: FormGroup;
  errors: any[] = [];
  isLoginSucess!: boolean;
  userLogion!: UserLogin;
  isLoading: boolean = false;

  constructor(
    private registerService: RegisterService,
    private router: Router
  ) {
    this.isLoading = false;
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  get email() {
    return this.loginForm.get('email')!;
  }
  get password() {
    return this.loginForm.get('password')!;
  }

  Login() {
    if (this.loginForm.invalid) {
      return;
    }
    this.userLogion = Object.assign({}, this.userLogion, this.loginForm.value);
    this.isLoading = true;
    this.registerService.loginUser(this.userLogion).subscribe(
          sucesso => { this.processarLoginSucesso(sucesso) },
          falha => { this.processarFalha(falha) },
        );
  }

  processarLoginSucesso(response: any) {
    this.isLoading = false;
    this.errors = [];
    this.isLoginSucess = true;
    this.registerService.LocalStorage.salvarDadosLocaisUsuario(response);
    if (response != this.errors) {
      setTimeout(() => {
      
        this.router.navigate(['/comming-soon']);
      }, 2000);
    }
  }

  processarFalha(fail: any) {
    this.isLoading = false;
    this.errors = fail.error.errors;
  }
}
