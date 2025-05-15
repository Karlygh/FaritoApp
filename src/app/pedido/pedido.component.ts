import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-pedido',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent {
  // Catálogo predefinido
  catalogo = [
    { nombre: 'Croquetas de jamón', precio: 6.5, imagen: 'assets/croquetas.png' },
    { nombre: 'Calamares a la andaluza', precio: 8.0, imagen: 'assets/calamares.jpg' },
    { nombre: 'Ensalada César', precio: 9.5, imagen: 'assets/ensalada.jpg' },
    { nombre: 'Ensalada mediterránea', precio: 8.0, imagen: 'assets/ensaladamedi.jpg' },
    { nombre: 'Pizza Margarita', precio: 10.0, imagen: 'assets/pizza.jpg' },
    { nombre: 'Pizza barbacoa', precio: 12.0, imagen: 'assets/pizzabqq.jpg' },
    { nombre: 'Chuleta de ternera', precio: 18.5, imagen: 'assets/chuleta.png' },
    { nombre: 'Costillas BBQ', precio: 16.0, imagen: 'assets/costillas.png' },
    { nombre: 'Coca-Cola', precio: 2.5, imagen: 'assets/cola.png' },
    { nombre: 'Agua Solán de Cabras', precio: 1.8, imagen: 'assets/solan.jpg' },
    { nombre: 'Natillas caseras', precio: 4.0, imagen: 'assets/natillas.jpeg' },
    { nombre: 'Tarta de queso', precio: 5.5, imagen: 'assets/tarta.jpg' }
  ];

  // Estado del pedido
  pedido: any[] = [];
  platoSeleccionado: any = null;
  precioSeleccionado: number = 0;
  pedidoConfirmado = false;

  mostrarMensajeSugerencia = false;

  // Formulario de cliente
  formularioCliente: FormGroup;

  // Zoom botón
  animarZoom = false;


  // Datos del cliente para mostrar en el mensaje
  datosCliente = {
    nombreCliente: '',
    telefonoCliente: '',
    correoCliente: ''
  };

  constructor(private fb: FormBuilder) {
    this.formularioCliente = this.fb.group({
      nombreCliente: ['', Validators.required],
      telefonoCliente: ['', [Validators.required, Validators.pattern('^[0-9]{9}$')]],
      correoCliente: ['', [Validators.required, Validators.email]]
    });
  }

  actualizarPrecioSeleccionado() {
    this.precioSeleccionado = this.platoSeleccionado ? this.platoSeleccionado.precio : 0;
  }

agregarAlPedido(plato: any) {
  if (!plato) return;

  const existente = this.pedido.find(p => p.nombre === plato.nombre);
  if (existente) {
    existente.cantidad++;
  } else {
    this.pedido.push({ ...plato, cantidad: 1 });
  }

  // Mostrar mensaje
  this.mostrarMensajeSugerencia = true;
  setTimeout(() => {
    this.mostrarMensajeSugerencia = false;
  }, 4000);

  // ✅ Activar animación del botón
  this.animarZoom = true;
  setTimeout(() => {
    this.animarZoom = false;
  }, 800); 
}


  aumentarCantidad(plato: any) {
    plato.cantidad++;
  }

  disminuirCantidad(plato: any) {
    if (plato.cantidad > 1) {
      plato.cantidad--;
    } else {
      this.eliminarDelPedido(plato);
    }
  }

  eliminarDelPedido(plato: any) {
    this.pedido = this.pedido.filter(p => p !== plato);
  }

  obtenerTotal(): number {
    return this.pedido.reduce((total, item) => total + item.precio * item.cantidad, 0);
  }

  confirmarPedido() {
    if (this.formularioCliente.valid && this.pedido.length > 0) {
      // Guardar los datos para mostrarlos en el mensaje
      this.datosCliente = {
        nombreCliente: this.formularioCliente.value.nombreCliente,
        telefonoCliente: this.formularioCliente.value.telefonoCliente,
        correoCliente: this.formularioCliente.value.correoCliente
      };

      this.pedidoConfirmado = true;

      // Limpiar todo tras 5 segundos
      setTimeout(() => {
        this.pedidoConfirmado = false;
        this.pedido = [];
        this.platoSeleccionado = null;
        this.precioSeleccionado = 0;
        this.formularioCliente.reset();
      }, 5000);
    } else {
      this.formularioCliente.markAllAsTouched();
    }
  }
}
