import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoxService {

  private apiUrl = 'https://randomfox.ca/floof/'

 

  constructor(private http: HttpClient) {}

  

  getFox() : Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }


}
