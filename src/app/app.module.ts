import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu.component'; // Importando o MenuComponent

@NgModule({
  declarations: [
    MenuComponent   // Declaração do MenuComponent
  ],
  imports: [
    BrowserModule   // Importa o módulo para rodar no navegador
  ],
  exports: [
    MenuComponent   // Exporta o MenuComponent para ser utilizado em componentes standalone
  ],
  providers: [],
  bootstrap: [AppComponent]   // Define o AppComponent como o componente inicial
})
export class AppModule { }
