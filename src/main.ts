import { bootstrapApplication } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { defineLocale } from 'ngx-bootstrap/chronos'; // 🔧 Idioma español para ngx-bootstrap
import { esLocale } from 'ngx-bootstrap/locale';
defineLocale('es', esLocale); // 🔧 Definir locale global

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    importProvidersFrom(BsDatepickerModule.forRoot()), // ✅ Configuración correcta para standalone
    provideAnimationsAsync(),
  ],
});
