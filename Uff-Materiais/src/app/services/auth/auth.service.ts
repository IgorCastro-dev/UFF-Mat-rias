import { CookieService } from 'ngx-cookie-service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = "http://localhost:8080/v1/api/uff-materias";

  private jwtHelperService: JwtHelperService = new JwtHelperService();

  constructor(private http: HttpClient,private cookieService:CookieService) {}

  login(email: string, password: string): Observable<any> {
    const loginDto = { username: email, password: password };
    return this.http.post<any>(`${this.apiUrl}/login`, loginDto);
  }

  isAuthenticated(){

    const token = this.cookieService.get("token");
    if (!token) {
      // Token não existe
      return false;
    }
    try {
      const isTokenExpired = this.jwtHelperService.isTokenExpired(token);
      const decodedToken: any = this.jwtHelperService.decodeToken(token);
      if (isTokenExpired || decodedToken.iss !== "Token do app") {
        // Token expirado
        return false;
      }

      return true;
    } catch (error) {
      console.error('Erro ao verificar o token:', error);
      return false;
    }
  }

  isAdmin(){
    try {
      const token = this.cookieService.get("token");
      const decodeToken = this.jwtHelperService.decodeToken(token);

      if (decodeToken.roles == "ADMIN") {
        return true;
      }
      return false;
    } catch (error) {
      console.error('Erro ao decodificar o token:', error);
      return false;
    }
  }
}
