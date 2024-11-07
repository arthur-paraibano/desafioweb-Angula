import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  standalone: true,
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss']
})
export class HelloComponent {
  @Input() name: string | undefined;
}
