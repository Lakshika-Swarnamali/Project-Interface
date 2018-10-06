import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {

  constructor(private http: HttpClient) { }
  public getAllUsers(): Observable<any> {
    return this.http.get('//localhost:8080/allUsers');
  }
}
