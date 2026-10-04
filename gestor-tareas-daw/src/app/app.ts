import { Component, inject, signal } from '@angular/core';
import { TareasService } from './servicios/tareas';
import { TareaItem } from './components/tarea-item/tarea-item';

@Component({
  selector: 'app-root',
  imports: [TareaItem],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  private tareasService = inject(TareasService);

  tareas = this.tareasService.obtenerTareas();

  nuevaTarea = signal('');

  agregarTarea() {
    const tarea = this.nuevaTarea().trim();

    if (tarea !== '') {
      this.tareasService.agregarTarea(tarea);
      this.nuevaTarea.set('');
    }
  }

  eliminarTarea(indice: number) {
    this.tareasService.eliminarTarea(indice);
  }
}