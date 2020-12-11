import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { IOrder } from '../shared/interfaces';



const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  currentOrder: IOrder;

  constructor(private http: HttpClient) { }

  create(data: any): Observable<any> {
    return this.http.post(`${apiUrl}/order/create`, data, { withCredentials: true }).pipe(
      tap(order => this.currentOrder = order)
    );
  }
  edit(data: any, id:string): Observable<any> {
    return this.http.post(`${apiUrl}/order/edit/${id}`, data, { withCredentials: true }).pipe(
      tap(order => this.currentOrder = order)
    );
  }
  getDetails(id:string){
    return this.http.get(`${apiUrl}/order/details/${id}`,{ withCredentials: true }).pipe(
      tap(order => {})
    );
  }
  getAll(){
    return this.http.get(`${apiUrl}/order/all`).pipe(
      tap(orders=> console.log(orders))
    );
  }
  getMyOrders(){
    return this.http.get(`${apiUrl}/order/myOrders`,{ withCredentials: true }).pipe(
      tap(orders=> console.log(orders))
    );
  }
}
