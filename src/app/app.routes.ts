import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';
import { roleGuard } from './core/guards/role.guard';
import { Rol } from './core/models/usuario.model';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () =>
      import('./features/auth/login/login').then((m) => m.Login),
  },
  {
    path: 'estudiantes',
    canActivate: [authGuard, roleGuard([Rol.ADMIN])],
    loadComponent: () =>
      import('./features/estudiantes/estudiantes-list/estudiantes-list').then(
        (m) => m.EstudiantesList,
      ),
  },
  {
    path: 'cursos',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./features/cursos/cursos-list/cursos-list').then(
        (m) => m.CursosList,
      ),
  },
  {
    path: 'mis-cursos',
    canActivate: [authGuard, roleGuard([Rol.ESTUDIANTE])],
    loadComponent: () =>
      import('./features/estudiantes/mis-cursos/mis-cursos').then(
        (m) => m.MisCursos,
      ),
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'login',
  },
];