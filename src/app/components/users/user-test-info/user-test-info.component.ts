import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'user-test-info',
    templateUrl: './user-test-info.component.html',
    styleUrls: ['./user-test-info.component.css']
})
export class UserTestInfoComponent implements OnInit {
    @Input() userId: number = 0;

    @Output() onIdClick = new EventEmitter<number>();
    showId(id: number) {
        this.onIdClick.emit(id);
    }

    constructor() { }

    ngOnInit(): void {
    }

}
