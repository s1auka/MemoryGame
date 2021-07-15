import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './../user';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const USERS_URL = 'https://jsonplaceholder.typicode.com/users'




@Injectable({
    providedIn: "root"
})
export class GetUsersService {
    users: User[] = [];

    constructor(private http: HttpClient) { }

    getUsers(): Observable<User[]> {
        return this.http.get(USERS_URL).pipe(map((data: any) => {
            let usersList = data;
            return usersList.map(function (user: any): User {
                return new User(user.id, user.name, user.username, user.email, user.phone, user.website, user.address.city);
            });
        }));
    }

    setUsers(users: any) {
        this.users = users;
    }

    getUserInfo(id: number) {
        return this.users[id - 1];
    }
}


