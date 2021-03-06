import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { URL_API } from './app.constants';
//import { environment } from '@environments/environment';
import { User } from '../account/user';

@Injectable({ providedIn: 'root' })
export class AccountService {
    private userSubject: BehaviorSubject<User>;
    public user: Observable<User>;
    public usuario: User = new User();
    constructor(
        private router: Router,
        private http: HttpClient
    ) {
        this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user') || '{}'));
        this.user = this.userSubject.asObservable();

    }

    public get userValue(): User {
        return this.userSubject.value;
    }

    login(username: any, password: any) {
        return this.http.post<User>(URL_API.SERVER_URL_API + "users/authenticate", { username, password })
            .pipe(map(user => {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('user', JSON.stringify(user));
                this.userSubject.next(user);
                return user;
            }));
    }

    logout() {
        // remove user from local storage and set current user to null
        localStorage.removeItem('user');
        this.userSubject.next(this.usuario);
        this.router.navigate(['/home']);
    }

    register(user: User) {
        return this.http.post(URL_API.SERVER_URL_API + "users", user);
    }

    getAll() {
        return this.http.get<User[]>(URL_API.SERVER_URL_API + "users");
    }

    getById(id: string) {
        return this.http.get<User>(`${URL_API.SERVER_URL_API}users/${id}`);
    }

    update(id: any, params: any) {
        return this.http.put(`${URL_API.SERVER_URL_API}users/${id}`, params)
            .pipe(map(x => {
                // update stored user if the logged in user updated their own record
                if (id == this.userValue.id) {
                    // update local storage
                    const user = { ...this.userValue, ...params };
                    localStorage.setItem('user', JSON.stringify(user));

                    // publish updated user to subscribers
                    this.userSubject.next(user);
                }
                return x;
            }));
    }

    delete(id: string) {
        return this.http.delete(`${URL_API.SERVER_URL_API}users/${id}`)
            .pipe(map(x => {
                // auto logout if the logged in user deleted their own record
                if (id == this.userValue.id) {
                    this.logout();
                }
                return x;
            }));
    }

    upload(archivo: File, id: string) {
        let formData = new FormData();
        formData.append("foto", archivo);
        formData.append("id", id);
        formData.append('name', archivo.name);
        return this.http.post(`${URL_API.SERVER_URL_API}users/upload`, formData);
    }
}