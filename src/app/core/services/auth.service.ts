import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user = [{ usuario: 'test01', password: 'test01' }];
  constructor(private http: HttpClient) {}

  getUsers(): Observable<any> {
    return of(this.user);
  }
}
