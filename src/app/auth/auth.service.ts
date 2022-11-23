import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  url: string = 'http://129.151.97.168:8080/api';
  public log!: boolean;
  public user!: any;
  public Token: string = localStorage.getItem('token') || '';
  httpOptions = {
    headers: new HttpHeaders({
      Authorization: `Bearer ${this.Token}`,
    }),
  };
  constructor(private http: HttpClient) {}

  registrarUsuario(obj: object) {
    return this.http.post(this.url + '/register', obj);
  }
  iniciarSesion(obj: object) {
    return this.http.post(this.url + '/login', obj);
  }
  guardarToken(token: string) {
    if (token != 'null') {
      localStorage.setItem('token', token);
      this.log = true;
      return true;
    }
    return false;
  }
  obtenerToken() {
    return localStorage.getItem('token') || '';
  }
  validarAutentificacion(): Observable<boolean> {
    console.log('bbcta');
    if (!localStorage.getItem('token')) {
      this.log = false;
      return of(false);
    }
    this.log = true;
    return of(true);
  }
  obtenerUsuario() {
    return this.http.get(this.url + '/login', this.httpOptions);
  }
}
