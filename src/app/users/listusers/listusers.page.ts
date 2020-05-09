import { Component, OnInit } from '@angular/core';

// Serviço de acesso à API
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-listusers',
  templateUrl: './listusers.page.html',
  styleUrls: ['./listusers.page.scss'],
})
export class ListusersPage implements OnInit {

  // Variavel que indentifica se todos os usuários
  noUsers = false;

  // Variavel com a lista array de usuários obtidos
  data: Array<any> = [];

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {

    // Obtendo os dados da API
    this.usersService.getUsers().subscribe((res: any) => {

      // Se obteve com sucesso os dados com sucesso
      if (res.status === 'sucess') {

        // Loop para descartar usuários removidos
        res.result.forEach((value) => {

          if (value !== null) {
            this.data.push(value);
          }

        });

        // Se não existem usuários
        if (this.data.length === 0) {
          this.noUsers = true;
        }

        // Se falhou  ao acessar o API
      } else {
        console.error('Falha no acesso à API');
      }

    });
  }

}
