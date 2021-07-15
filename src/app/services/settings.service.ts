import { Injectable } from '@angular/core';

const EASY_LEVEL = "Easy";
const MEDIUM_LEVEL = "Medium";
const HARD_LEVEL = "Hard";

const LEVELS: string[] = [EASY_LEVEL, MEDIUM_LEVEL, HARD_LEVEL];
let selectedValue: string = LEVELS[0];

const CARDS_IN_ROW = 4;

enum NumberOfCardsByLevel {
    Easy = 12,
    Medium = 16,
    Hard = 20,
}

export interface CardsInTable {
    cardsInRow: Number;
    cardsInColumn: Number;
    totalCards: Number;
}

@Injectable({
    providedIn: "root"
})
export class LevelControlService {

    getLevels(): string[] {
        return LEVELS;
    }

    getSelectedValue(): string {
        return selectedValue;
    }

    setSelectedValue(value: string) {
        selectedValue = value;
    }
}


@Injectable({
    providedIn: "root"
})
export class ItemControlService {

    getCardsInRowAndColumn(): CardsInTable {
        return {
            cardsInRow: CARDS_IN_ROW,
            cardsInColumn: getNumberOfCards() / CARDS_IN_ROW,
            totalCards: +getNumberOfCards(),

        }
    }


}

function getNumberOfCards(): any {
    return +NumberOfCardsByLevel[<any>selectedValue];

}

