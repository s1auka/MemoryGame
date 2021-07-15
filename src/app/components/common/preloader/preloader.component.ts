import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-preloader',
    templateUrl: './preloader.component.html',
    styleUrls: ['./preloader.component.css']
})
export class PreloaderComponent implements OnInit {

    @Input() isLoading: boolean = true;

    constructor() { }

    ngOnInit(): void {
    }

}
