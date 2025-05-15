import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./hero/hero.component').then((m) => m.HeroComponent),
  },
  {
    path: 'menu',
    loadComponent: () =>
      import('./menucomida/menucomida.component').then(
        (m) => m.MenucomidaComponent
      ),
  },

  {
    path: 'reservas',
    loadComponent: () =>
      import('./reservas/reservas.component').then((m) => m.ReservasComponent),
  },
  {
    path: 'galeria',
    loadComponent: () =>
      import('./galeria/galeria.component').then((m) => m.GaleriaComponent),
  },
  {
    path: 'pedido',
    loadComponent: () =>
      import('./pedido/pedido.component').then(
        (m) => m.PedidoComponent
      ),
  },
  {
    path: 'ubicacion',
    loadComponent: () =>
      import('./ubicacion/ubicacion.component').then(
        (m) => m.UbicacionComponent
      ),
  },
];
