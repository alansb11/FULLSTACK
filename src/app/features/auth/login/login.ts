import { Component, signal, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { Rol, LoginResponse } from '../../../core/models/usuario.model';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private router = inject(Router);

  cargando = signal(false);
  errorMsg = signal<string | null>(null);

  form = this.fb.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.cargando.set(true);
    this.errorMsg.set(null);

    const { username, password } = this.form.getRawValue();

    this.authService.login(username!, password!).subscribe({
      next: (res: LoginResponse) => {
        this.cargando.set(false);
        if (res.usuario.rol === Rol.ADMIN) {
          this.router.navigate(['/estudiantes']);
        } else {
          this.router.navigate(['/mis-cursos']);
        }
      },
      error: (err: { status: number }) => {
        this.cargando.set(false);
        this.errorMsg.set(
          err.status === 401
            ? 'Usuario o contraseña incorrectos.'
            : 'No se pudo conectar con el servidor. Intenta de nuevo.',
        );
      },
    });
  }
}