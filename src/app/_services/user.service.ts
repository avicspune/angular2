import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../_models/index';

@Injectable()
export class UserService {
    constructor(private http: HttpClient) { }
burl:String = 'https://pro-dmit.herokuapp.com/rest/student';
    getAll() {
        return this.http.get<User[]>(this.burl+'/getAllStudent');
    }

    getById(id: number) {
        return this.http.get('/api/users/' + id);
    }

    create(user: User) {
        return this.http.post(this.burl+'/addStudent', user);
    }

    update(user: User) {
        return this.http.put('/api/users/' + user.id, user);
    }

    delete(id: number) {
        return this.http.delete(this.burl+'/delete/id/' + id);
    }
}