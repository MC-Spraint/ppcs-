import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private _homeUrl:string = "http://localhost:3000"

  constructor(private http: HttpClient) { }

  register(user:any){
    return this.http.post<any>(this._homeUrl+"/register" , user);
  }
}
