import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarefas',
  templateUrl: './tarefas.component.html',
  styleUrls: ['./tarefas.component.css']
})
export class TarefasComponent implements OnInit {
  tarefas: any[] = [];
  newTarefa = { nome: '', custo: 0, data_limite: '' };

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadTarefas();
  }

  loadTarefas() {
    this.http.get('http://localhost:3000/tarefas').subscribe((data: any) => {
      this.tarefas = data;
    });
  }

  addTarefa() {
    this.http.post('http://localhost:3000/tarefas', this.newTarefa).subscribe(() => {
      this.loadTarefas();
      this.newTarefa = { nome: '', custo: 0, data_limite: '' };
    });
  }

  deleteTarefa(id: number) {
    this.http.delete(`http://localhost:3000/tarefas/${id}`).subscribe(() => {
      this.loadTarefas();
    });
  }

  // Métodos de edição e reordenação aqui...
}
