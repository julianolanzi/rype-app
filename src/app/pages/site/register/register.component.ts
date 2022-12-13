import { User } from './../../../models/user-register';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, ElementRef, ViewChildren } from '@angular/core';
import { RegisterService } from 'src/app/services/register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  cadastroForm!: FormGroup;
  errors: any[] = [];
  User!: User;
  isRegisterSucess!: boolean
  isLoading: boolean = false;

  constructor(
    private registerService: RegisterService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.isLoading =  false;
    this.isRegisterSucess = false;
    this.cadastroForm = new FormGroup({
      nickname: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
      lastname: new FormControl('', [Validators.required]),
      birthday: new FormControl('', [Validators.required]),
      phone: new FormControl('', [
        Validators.required,
        Validators.pattern('^((\\+55-?)|0)?[0-9]{11}$'),
      ]),
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      terms: new FormControl('', [
        Validators.required,
        Validators.pattern('true'),
      ]),
    });
  }

  get nickname() {
    return this.cadastroForm.get('nickname')!;
  }
  get terms() {
    return this.cadastroForm.get('terms')!;
  }
  get phone() {
    return this.cadastroForm.get('phone')!;
  }
  get name() {
    return this.cadastroForm.get('name')!;
  }
  get lastname() {
    return this.cadastroForm.get('lastname')!;
  }
  get birthday() {
    return this.cadastroForm.get('birthday')!;
  }
  get email() {
    return this.cadastroForm.get('email')!;
  }
  get password() {
    return this.cadastroForm.get('password')!;
  }

  addAcount() {
    if (this.cadastroForm.invalid) {
      return;
    }
    this.User = Object.assign({}, this.User, this.cadastroForm.value);
    this.isLoading =  true;
    this.registerService.registrarUsuario(this.User).subscribe(
      (sucesso) => {
        this.processarSucesso(sucesso);
      },
      (falha) => {
        this.processarFalha(falha);
      }
    );
  }
  processarSucesso(response: any) {
   this.isLoading =  false;
   this.isRegisterSucess = true;
   this.errors = [];

    this.registerService.LocalStorage.salvarDadosLocaisUsuario(response);
    if (response != this.errors) {
    }
    setTimeout(() => {
      
      this.router.navigate(['/auth']);
    }, 2000);
  }
  processarFalha(fail: any) {
    this.isLoading =  false;
    this.errors = fail.error.errors;
  }
}
