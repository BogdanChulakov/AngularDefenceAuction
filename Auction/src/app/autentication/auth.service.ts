import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IUser } from '../shared/interfaces';
import { tap } from 'rxjs/operators';

const apiUrl = environment.apiUrl;

@Injectable()
export class AuthService {

    currentUser: IUser;

    get isLogged():boolean {
        return !!this.currentUser;
    }

    constructor(private http: HttpClient) { }

    login(data: any): Observable<any> {
        return this.http.post(`${apiUrl}/users/login`, data, { withCredentials: true }).pipe(
            tap((user: IUser) => this.currentUser = user)
        );
    }
    register(data: any): Observable<any> {
        return this.http.post(`${apiUrl}/users/register`, data, { withCredentials: true }).pipe(
            tap((user: IUser) => this.currentUser = user)
        );
    }
    logout(): Observable<any> {
        return this.http.post(`${apiUrl}/users/logout`, {}, { withCredentials: true }).pipe(
            tap((user: IUser) => this.currentUser = null)
        );;
    }
}