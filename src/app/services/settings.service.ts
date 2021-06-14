import { Injectable } from '@angular/core';

const EASY_LEVEL = "Easy";
const MEDIUM_LEVEL = "Medium";
const HARD_LEVEL = "Hard"

enum NumberOfCardsByLevel {
    Easy = 12,
    Medium = 16,
    Hard = 20,
}

@Injectable()
export class SettingsService {
    private levels: string[] = [EASY_LEVEL, MEDIUM_LEVEL, HARD_LEVEL];
    private selectedValue: string = this.levels[0];


    getLevels(): string[] {
        return this.levels;
    }

    getSelectedValue(): string {
        return this.selectedValue;
    }

    setSelectedValue(value: string) {
        this.selectedValue = value;
        console.log("selected")
    }
}
