import { Injectable } from '@angular/core';


// Requisido assícronas
import { Observable } from 'rxjs';

// Cliente HTTP do angular
import { HttpClient } from '@angular/common/http';

// Modelagem de dados
import { ResponseUsers } from '../models/users.model';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  // URL DA API
  private apiUrl = 'http://localhost:8888/api';

  // Inicializa o cliente HTTP
constructor(private http: HttpClient) { }

// Método para obter todos os usuários
getUsers(): Observable<ResponseUsers> {

  return this.http.get<ResponseUsers>(this.apiUrl);
}

}
