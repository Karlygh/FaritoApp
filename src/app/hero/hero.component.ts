import { Component, AfterViewInit, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
  imports: [CommonModule, RouterModule]
})
export class HeroComponent implements AfterViewInit {
  @ViewChildren('animado') elementosAnimados!: QueryList<ElementRef>;

  ngAfterViewInit() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).classList.add('animado-visible');
        }
      });
    }, { threshold: 0.1 });

    this.elementosAnimados.forEach(el => observer.observe(el.nativeElement));
  }
}
