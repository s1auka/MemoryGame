import { GetUsersService } from './../../../services/get-users.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { User } from 'src/app/user';

@Component({
    selector: 'user-info',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
    id: number = 0;
    user: any;

    constructor(private route: ActivatedRoute, private getHttpUsers: GetUsersService) { }

    ngOnInit() {
        this.route.paramMap.pipe(
            switchMap(params => params.getAll('id'))
        )
            .subscribe(data => this.id = +data);

        this.user = this.getHttpUsers.getUserInfo(this.id);

        console.log(this.id, this.user)
    }

}
