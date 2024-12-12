import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Fox } from '../models/fox.model';

@Injectable({
  providedIn: 'root'
})
export class FoxService {

  private apiUrl = 'https://randomfox.ca/floof/'

 

  constructor(private http: HttpClient) {}

  getFox() : Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  getSomeFox(): Observable<Fox> {
    return this.http.get<Fox>(this.apiUrl);

  }


}
