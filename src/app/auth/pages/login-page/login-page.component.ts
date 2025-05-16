import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login-page',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css',
})
export class LoginPageComponent {

  authService = inject(AuthService);

  hasError= signal(false);
  fb = inject(FormBuilder);

  type = 'password';
  icon = 'bi bi-eye';

  showPassword(type: string) {
    if (type === 'password') {
      this.type = 'text';
      this.icon = 'bi bi-eye-slash';
    } else {
      this.type = 'password';
      this.icon = 'bi bi-eye';
    }
  }

  logginForm = this.fb.group({
    correo: ['', [Validators.required, Validators.email]],
    contrasena : ['', [Validators.required, Validators.minLength(6), Validators.maxLength(15) ] ]
  })

  onSubmit() {
  if (this.logginForm.invalid) {
    this.hasError.set(true);
    setTimeout(() => {
      this.hasError.set(false);
    }, 2000);
    return;
  }

 const { correo = '', contrasena = '' } = this.logginForm.value;
this.authService.login(correo!, contrasena!).subscribe((isAuthenticated) => {
  if (isAuthenticated) {
    alert('Logueado');
    return;
  }
  this.hasError.set(true);
  setTimeout(() => {
    this.hasError.set(false);
  }, 2000);
});
  }
}