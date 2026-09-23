import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Estudiante } from '../models/estudiante.model';

@Injectable({ providedIn: 'root' })
export class EstudiantesService {
  private http = inject(HttpClient);
  private apiUrl = `${environment.apiUrl}/estudiantes`;

  getAll(): Observable<Estudiante[]> {
    return this.http.get<Estudiante[]>(this.apiUrl);
  }

  getOne(id: number): Observable<Estudiante> {
    return this.http.get<Estudiante>(`${this.apiUrl}/${id}`);
  }

  create(data: Partial<Estudiante>): Observable<Estudiante> {
    return this.http.post<Estudiante>(this.apiUrl, data);
  }

  update(id: number, data: Partial<Estudiante>): Observable<Estudiante> {
    return this.http.patch<Estudiante>(`${this.apiUrl}/${id}`, data);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}