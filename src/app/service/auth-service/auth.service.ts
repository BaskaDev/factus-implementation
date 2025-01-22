import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private authUrl = 'https://api-sandbox.factus.com.co/oauth/token';

  constructor(private http: HttpClient) {}

  authenticate(): Observable<any> {
    const authData = {
      grant_type: 'password',
      client_id: 'tu_client_id',
      client_secret: 'tu_client_secret',
      username: 'usuario@correo.com',
      password: 'tu_password',
    };

    const body = new HttpParams()
      .set('grant_type', authData.grant_type)
      .set('client_id', authData.client_id)
      .set('client_secret', authData.client_secret)
      .set('username', authData.username)
      .set('password', authData.password);

    
    return this.http.post(this.authUrl, body, {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
      }),
    });
  }
}
