import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'profile-page';

  // Exemplo de ação ao clicar em um botão
  viewWork() {
    alert('Você será redirecionado para os projetos!');
  }
}
