import { LevelControlService } from './../../services/settings.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {
    levels: string[] = [];
    selectedButton: any;
    selectedValue: string = "";

    constructor(private levelControlService: LevelControlService) {
    }

    ngOnInit() {
        this.levels = this.levelControlService.getLevels();
        this.selectedValue = this.levelControlService.getSelectedValue();
        this.getSelectedLevel();
    }

    getSelectedLevel() {
        this.selectedButton = this.levels.find(level => level === this.selectedValue);
    }

    onLevelChange(level: any) {
        this.getSelectedLevel();
        this.levelControlService.setSelectedValue(level);
    }
}
