import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, EventEmitter, Input } from '@angular/core';
import { Router } from '@angular/router';
import { resetPassword } from 'src/app/models/resert-password';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css'],
})
export class ResetPasswordComponent {
  resetForm!: FormGroup;
  errors: any[] = [];
  user!: resetPassword;
  ischangeSucess: boolean;
  isLoading: boolean = false;
  constructor(
    private router: Router,
    private registerService: RegisterService
  ) {
    this.ischangeSucess = false;
    this.isLoading = false;
    this.resetForm = new FormGroup({
      confirmPassword: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  get confirmPassword() {
    return this.resetForm.get('confirmPassword')!;
  }
  get password() {
    return this.resetForm.get('password')!;
  }

  ngOnInit(): void {}

  resetPassword(): any {
    if (this.resetForm.invalid) {
      return;
    }
    this.user = Object.assign({}, this.user, this.resetForm.value);
    this.isLoading = true;
    const token = this.getToken();

    if (this.user.password !== this.user.confirmPassword) {
      this.errors = ['Senhas não conferem'];
      this.resetForm.reset();
      return this.errors;
    }

    this.registerService.resetPassword(this.user, token).subscribe(
      (sucesso) => {
        this.processarSucesso(sucesso);
      },
      (falha) => {
        this.processarFalha(falha);
      }
    );
  }

  processarSucesso(response: any) {
    this.isLoading = false;
    this.ischangeSucess = true;
    this.errors = [];
    setTimeout(() => {
      this.router.navigate(['/auth']);
    }, 2000);
  }
  processarFalha(fail: any) {
    this.isLoading = false;
    this.errors = fail.error.errors;
  }

  getToken() {
    const token = window.location.pathname;

    const tokenfinish = token.split('/');
    return tokenfinish[2];
  }
}
