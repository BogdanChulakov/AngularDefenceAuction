import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { IItem } from '../shared/interfaces';



const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  currentItem: IItem;

  constructor(private http: HttpClient) { }

  create(data: any): Observable<any> {
    return this.http.post(`${apiUrl}/item/create`, data, { withCredentials: true }).pipe(
      tap(item => this.currentItem = item)
    );
  }
  edit(data: any, id:string): Observable<any> {
    return this.http.post(`${apiUrl}/item/edit/${id}`, data, { withCredentials: true }).pipe(
      tap(item => this.currentItem = item)
    );
  }
  getDetails(id:string){
    return this.http.get(`${apiUrl}/item/details/${id}`,{ withCredentials: true }).pipe(
      tap(item => {})
    );
  }
  getAll(){
    return this.http.get(`${apiUrl}/item/all`).pipe(
      tap(item=> console.log(item))
    );
  }
  getMyItems(){
    return this.http.get(`${apiUrl}/item/myItems`,{ withCredentials: true }).pipe(
      tap(item=> console.log(item))
    );
  }
}
