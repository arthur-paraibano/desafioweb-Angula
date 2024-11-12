import { Component } from '@angular/core';

@Component({
  selector: 'menu-component',  // Esse é o nome da tag que você deve usar no HTML
  template: '<h2>Arthur</h2>',
  styles: ['h2 {color: blue}'],
})
export class MenuComponent {
  menuItems = ['Home', 'About', 'Contact'];  // Itens do menu
}
