import { CardsInTable, ItemControlService } from './../../services/settings.service';
import { Component } from '@angular/core';
import { getTranslationDeclStmts } from '@angular/compiler/src/render3/view/template';

@Component({
    selector: 'app-content',
    templateUrl: './content.component.html',
    styleUrls: ['./content.component.css']
})
export class ContentComponent {
    items: any | undefined;
    gameOn: boolean;
    cardsInTable: CardsInTable | undefined;
    columns: number[] | undefined;
    rows: number[] | undefined;
    imagesSrcs: (string | number)[][] | undefined;

    constructor(private itemControlService: ItemControlService) {
        this.gameOn = false;
    }

    private toggleGameStatus() {
        this.gameOn = !this.gameOn;
    }

    startGame() {
        this.toggleGameStatus()
        this.cardsInTable = this.itemControlService.getCardsInRowAndColumn();
        this.columns = [...Array(this.cardsInTable.cardsInColumn).keys()];
        this.rows = [...Array(this.cardsInTable.cardsInRow).keys()];
        this.imagesSrcs = this.getImagesSrcs(+this.cardsInTable.totalCards);

    }

    private getImagesSrcs(n: number): (string | number)[][] {
        let array = [];
        let imgSrc: string;
        for (let i = 0; i < n / 2; i++) {
            imgSrc = "./../../../assets/pictures/" + i + ".png";
            array.push([imgSrc, i]);
            array.push([imgSrc, i]);
        }
        return this.shuffle(array);
    }


    private shuffle(array: (string | number)[][]): (string | number)[][] {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    stopGame() {
        this.toggleGameStatus()
    }
}
