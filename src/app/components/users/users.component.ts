import { User } from './../../user';
import { GetUsersService } from './../../services/get-users.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
    users: User[] = [];
    constructor(private getHttpUsers: GetUsersService) { }

    ngOnInit(): void {
        this.getHttpUsers.getUsers().subscribe((data: User[]) => {
            this.users = data;
            this.getHttpUsers.setUsers(this.users);
        });
    }

}
