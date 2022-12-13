import { Component, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { recoveryPassword } from 'src/app/models/recovery-password';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-recovery-password',
  templateUrl: './recovery-password.component.html',
  styleUrls: ['./recovery-password.component.css'],
})
export class RecoveryPasswordComponent {


  recoveryForm!: FormGroup;
  errors: any[] = [];
  user!: recoveryPassword;
  isLoading: boolean = false;

  constructor(
    private registerService: RegisterService,
    private router: Router,
  ) {
    this.isLoading = false;
    this.recoveryForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
    });
  }

  get email() {
    return this.recoveryForm.get('email')!;
  }

  recoveryPass() {
    if (this.recoveryForm.invalid) {
      return;
    }
    this.user = Object.assign({}, this.user, this.recoveryForm.value);
    this.isLoading = true
    this.registerService.recoveryPassword(this.user).subscribe(
      (sucesso) => {
        this.processarSucesso(sucesso);
      },
      (falha) => {
        this.processarFalha(falha);
      }
    );
  }

  processarSucesso(response: any) {
    this.isLoading = true;
    this.errors = [];
    let token = response.crypt;
    this.router.navigate(['/reset-password/', token]);
  }
  processarFalha(fail: any) {
    this.isLoading = false;
    this.errors = fail.error.errors;
  }


}
