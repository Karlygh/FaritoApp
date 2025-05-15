import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as L from 'leaflet'; // 🔧 Importamos Leaflet
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-ubicacion',
  templateUrl: './ubicacion.component.html',
  styleUrls: ['./ubicacion.component.css'],
  imports: [CommonModule,RouterModule]
})
export class UbicacionComponent implements AfterViewInit {

  private map!: L.Map;

  // 🔧 Coordenadas del restaurante (Cádiz)
  private readonly coordenadas = {
    lat: 36.5297,
    lng: -6.2924
  };

  ngAfterViewInit(): void {
    this.inicializarMapa();
  }

  private inicializarMapa(): void {
    this.map = L.map('mapa').setView([this.coordenadas.lat, this.coordenadas.lng], 15);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(this.map);

    // 🔧 Añadir marcador
    L.marker([this.coordenadas.lat, this.coordenadas.lng])
      .addTo(this.map)
      .bindPopup('📍 Restaurante Farito')
      .openPopup();
  }
}
