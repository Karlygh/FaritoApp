import { Component } from '@angular/core';
import { MenucomidaComponent } from '../menucomida/menucomida.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
    standalone: true,
  imports: [CommonModule,FormsModule,RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
