import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from  '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  api: string = "https://jsonplaceholder.typicode.com/posts";
  constructor(private http:HttpClient) { }

  getdata():Observable<any[]>{

    return this.http.get<any[]>(this.api);

   }
}
