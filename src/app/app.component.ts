import { Component, VERSION } from '@angular/core';
import { HelloComponent } from "./hello.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [HelloComponent]
})
export class AppComponent {
  name = 'tarefas' + VERSION.major;
}
