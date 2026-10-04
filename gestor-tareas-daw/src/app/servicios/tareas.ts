import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TareasService {

  private tareas = signal<string[]>([
    'Estudiar Angular',
    'Hacer el ejercicio',
    'Repasar Signals'
  ]);

  obtenerTareas() {
    return this.tareas.asReadonly();
  }

  agregarTarea(tarea: string) {
    this.tareas.update(tareas => [...tareas, tarea]);
  }

  eliminarTarea(indice: number) {
    this.tareas.update(tareas =>
      tareas.filter((_, i) => i !== indice)
    );
  }
}