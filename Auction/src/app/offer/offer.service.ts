import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { IOffer } from '../shared/interfaces/offer';

const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class OfferService {

  currentOffer:IOffer;
  
  constructor(private http: HttpClient){
  }

  create(data: any,orderId:string): Observable<any> {
    return this.http.post(`${apiUrl}/offer/createOffer/${orderId}`, data, { withCredentials: true }).pipe(
      tap(offer => this.currentOffer = offer)
    );
  }
  getMyOffers(){
    return this.http.get(`${apiUrl}/offer/getMyOffers`,  { withCredentials: true }).pipe(
      tap(offer => console.log (offer))
    );
  }
}
