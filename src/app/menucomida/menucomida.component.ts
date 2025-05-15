import { Component, AfterViewInit, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  standalone: true,
  templateUrl: './menucomida.component.html',
  styleUrls: ['./menucomida.component.css'],
  imports: [CommonModule]
})
export class MenucomidaComponent implements AfterViewInit {
  @ViewChildren('animado') elementosAnimados!: QueryList<ElementRef>;

  ngAfterViewInit() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).classList.add('animado-visible');
        }
      });
    }, { threshold: 0.1 });

    this.elementosAnimados.forEach(el => {
      observer.observe(el.nativeElement);
    });
  }

  entrantes = [
    {
      nombre: 'Croquetas de jamón',
      descripcion: 'Crujientes por fuera y cremosas por dentro.',
      precio: 6.5,
      etiqueta: 'Recomendado',
      color: 'success',
      imagen: 'assets/croquetas.png'
    },
    {
      nombre: 'Calamares a la andaluza',
      descripcion: 'Rebozados en harina y fritos en aceite de oliva.',
      precio: 8.0,
      etiqueta: 'Especialidad',
      color: 'danger',
      imagen: 'assets/calamares.jpg'
    }
  ];

  ensaladas = [
    {
      nombre: 'Ensalada César',
      descripcion: 'Lechuga, pollo, croutons, parmesano y salsa César.',
      precio: 9.5,
      etiqueta: 'Recomendado',
      color: 'success',
      imagen: 'assets/ensalada.jpg'
    },
    {
      nombre: 'Ensalada mediterránea',
      descripcion: 'Tomate, pepino, cebolla, aceitunas y queso feta.',
      precio: 8.0,
      etiqueta: 'Especialidad',
      color: 'danger',
      imagen: 'assets/ensaladamedi.jpg'
    }
  ];

  pizzas = [
    {
      nombre: 'Pizza Margarita',
      descripcion: 'Base de tomate, mozzarella y albahaca fresca.',
      precio: 10.0,
      etiqueta: 'Especialidad',
      color: 'danger',
      imagen: 'assets/pizza.jpg'
    },
    {
      nombre: 'Pizza barbacoa',
      descripcion: 'Pollo, bacon, salsa barbacoa y queso fundido.',
      precio: 12.0,
      etiqueta: 'Recomendado',
      color: 'success',
      imagen: 'assets/pizzabqq.jpg'
    }
  ];

  chuletones = [
    {
      nombre: 'Chuleta de ternera',
      descripcion: 'Jugosa y a la brasa, con patatas rústicas.',
      precio: 18.5,
      etiqueta: 'Especialidad',
      color: 'danger',
      imagen: 'assets/chuleta.png'
    },
    {
      nombre: 'Costillas BBQ',
      descripcion: 'Con salsa barbacoa y ensalada coleslaw.',
      precio: 16.0,
      etiqueta: 'Recomendado',
      color: 'success',
      imagen: 'assets/costillas.png'
    }
  ];

  bebidas = [
    {
      nombre: 'Coca-Cola',
      descripcion: 'Refresco clásico con gas.',
      precio: 2.5,
      etiqueta: 'Recomendado',
      color: 'success',
      imagen: 'assets/cola.png'
    },
    {
      nombre: 'Agua Solán de Cabras',
      descripcion: 'Agua mineral natural.',
      precio: 1.8,
      etiqueta: 'Clásico',
      color: 'info',
      imagen: 'assets/solan.jpg'
    }
  ];

  postres = [
    {
      nombre: 'Natillas caseras',
      descripcion: 'Cremosas y con canela por encima.',
      precio: 4.0,
      etiqueta: 'Recomendado',
      color: 'success',
      imagen: 'assets/natillas.jpeg'
    },
    {
      nombre: 'Tarta de queso',
      descripcion: 'Con base de galleta y mermelada de frutos rojos.',
      precio: 5.5,
      etiqueta: 'Especialidad',
      color: 'danger',
      imagen: 'assets/tarta.jpg'
    }
  ];
}
