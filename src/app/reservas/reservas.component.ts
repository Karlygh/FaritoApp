// 🔧 Código funcional standalone con calendario en español

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { BsDatepickerModule, BsLocaleService } from 'ngx-bootstrap/datepicker'; // 🔧 Calendario Bootstrap
import { defineLocale } from 'ngx-bootstrap/chronos'; // 🔧 Locales
import { esLocale } from 'ngx-bootstrap/locale'; // 🔧 Español

defineLocale('es', esLocale); // 🔧 Activar idioma español

@Component({
  selector: 'app-reservas',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule, 
    FormsModule,
    BsDatepickerModule 
  ],
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.css']
})
export class ReservasComponent {
  reservaForm!: FormGroup;
  horariosDisponibles = ['13:00','13:30', '14:00', '15:00', '21:00', '22:00', '23:00','23:30'];
  reservaConfirmada = false;
  datosReserva: any;

  // 🔧 Configuración del calendario en español
  bsConfig = {
    dateInputFormat: 'DD/MM/YYYY',
    containerClass: 'theme-default'
  };

  constructor(
    private fb: FormBuilder,
    private localeService: BsLocaleService // 🔧 Servicio de idioma para el calendario
  ) {
    this.localeService.use('es'); // 🔧 Usar español
    this.crearFormulario();
  }

  crearFormulario(): void {
    this.reservaForm = this.fb.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      fecha: ['', Validators.required],
      personas: [1, [Validators.required, Validators.min(1), Validators.max(10)]],
      horario: ['', Validators.required],
      comentario: ['']
    });
  }

  onSubmit(): void {
    if (this.reservaForm.valid) {
      this.datosReserva = this.reservaForm.value;
      this.reservaConfirmada = true;
      this.reservaForm.reset();
    }
  }
}
