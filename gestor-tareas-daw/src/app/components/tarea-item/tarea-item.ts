import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-tarea-item',
  standalone: true,
  template: `
    <div class="tarjeta">
      <span>{{ tarea() }}</span>

      <button type="button" (click)="eliminar()">
        Eliminar
      </button>
    </div>
  `,
  styles: [`
    .tarjeta {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 12px 16px;
      margin: 10px 0;
      border: 1px solid #ddd;
      border-radius: 8px;
      background: #f8f8f8;
    }

    button {
      padding: 6px 12px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }
  `]
})
export class TareaItem {

  tarea = input.required<string>();

  indice = input.required<number>();

  onEliminar = output<number>();

  eliminar() {
    this.onEliminar.emit(this.indice());
  }
}