import { SettingsService } from './../../services/settings.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.css'],
    providers: []
})
export class SettingsComponent implements OnInit {
    levels: string[] = [];
    selectedButton: any;
    selectedValue: string = "";

    constructor(private settingsService: SettingsService) {
    }

    ngOnInit() {
        this.levels = this.settingsService.getLevels();
        this.selectedValue = this.settingsService.getSelectedValue();
        this.getSelectedLevel();
    }

    getSelectedLevel() {
        console.log("1")
        this.selectedButton = this.levels.find(level => level === this.selectedValue);
    }

    onLevelChange(level: any) {
        console.log(this.selectedValue);
        this.getSelectedLevel();
        this.settingsService.setSelectedValue(level);
    }
}
