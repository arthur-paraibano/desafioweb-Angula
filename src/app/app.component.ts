import { Component } from '@angular/core';
import { AppModule } from './app.module'; // Importa o AppModule
import { MenuComponent } from './components/menu.component'; // Importe se precisar de MenuComponent explicitamente

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AppModule, MenuComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  name = 'tarefas';
}
