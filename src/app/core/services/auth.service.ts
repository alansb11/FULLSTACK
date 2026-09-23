import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { environment } from '../../../environments/environment';
import { LoginResponse, Usuario } from '../models/usuario.model';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private apiUrl = `${environment.apiUrl}/auth`;
  private readonly TOKEN_KEY = 'access_token';
  private readonly USER_KEY = 'usuario';

  usuarioActual = signal<Usuario | null>(this.obtenerUsuarioGuardado());

  constructor(private http: HttpClient, private router: Router) {}

  login(username: string, password: string): Observable<LoginResponse> {
    return this.http
      .post<LoginResponse>(`${this.apiUrl}/login`, { username, password })
      .pipe(
        tap((res) => {
          localStorage.setItem(this.TOKEN_KEY, res.access_token);
          localStorage.setItem(this.USER_KEY, JSON.stringify(res.usuario));
          this.usuarioActual.set(res.usuario);
        }),
      );
  }

  register(data: {
    username: string;
    password: string;
    rol: string;
    idEstudiante?: number;
  }): Observable<Usuario> {
    return this.http.post<Usuario>(`${this.apiUrl}/register`, data);
  }

  logout(): void {
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem(this.USER_KEY);
    this.usuarioActual.set(null);
    this.router.navigate(['/login']);
  }

  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  estaAutenticado(): boolean {
    return !!this.getToken();
  }

  private obtenerUsuarioGuardado(): Usuario | null {
    const data = localStorage.getItem(this.USER_KEY);
    return data ? JSON.parse(data) : null;
  }
}