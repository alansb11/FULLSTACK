import { Component, OnInit, signal, inject } from '@angular/core';
import { EstudiantesService } from '../../../core/services/estudiantes.service';
import { Estudiante } from '../../../core/models/estudiante.model';
import { Navbar } from '../../../shared/navbar/navbar';

@Component({
  selector: 'app-estudiantes-list',
  standalone: true,
  imports: [Navbar],
  templateUrl: './estudiantes-list.html',
  styleUrl: './estudiantes-list.css',
})
export class EstudiantesList implements OnInit {
  private estudiantesService = inject(EstudiantesService);

  estudiantes = signal<Estudiante[]>([]);
  cargando = signal(true);
  error = signal<string | null>(null);

  ngOnInit(): void {
    this.cargar();
  }

  cargar(): void {
    this.cargando.set(true);
    this.estudiantesService.getAll().subscribe({
      next: (data) => {
        this.estudiantes.set(data);
        this.cargando.set(false);
      },
      error: () => {
        this.error.set('No se pudieron cargar los estudiantes.');
        this.cargando.set(false);
      },
    });
  }

  eliminar(id: number): void {
    if (!confirm('¿Eliminar este estudiante?')) return;

    this.estudiantesService.delete(id).subscribe({
      next: () => this.cargar(),
      error: () => this.error.set('No se pudo eliminar el estudiante.'),
    });
  }
}