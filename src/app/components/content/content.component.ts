import { ItemControlService } from './../../services/settings.service';
import { Component } from '@angular/core';

@Component({
    selector: 'app-content',
    templateUrl: './content.component.html',
    styleUrls: ['./content.component.css']
})
export class ContentComponent {
    gameOn: boolean;
    columns: number[] | undefined;
    rows: number[] = [];
    imagesSrcs: (string | number)[][] = [[]];
    cardBack: string;
    firstOpenedCard: any = undefined;
    secondOpenedCard: any = undefined;
    cells: number[] = [];


    constructor(private itemControlService: ItemControlService) {
        this.gameOn = false;
        this.cardBack = "./../../../assets/pictures/cardBack.jpg"
    }

    private toggleGameStatus() {
        this.gameOn = !this.gameOn;
    }

    startGame() {
        this.toggleGameStatus();
        let cardsInTable = this.itemControlService.getCardsInRowAndColumn();


        this.columns = [...Array(cardsInTable.cardsInColumn).keys()];
        this.rows = [...Array(cardsInTable.cardsInRow).keys()];
        this.imagesSrcs = this.getImagesSrcs(+cardsInTable.totalCards);
        this.cells = [...Array(cardsInTable.totalCards).keys()]
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

    checkCard(event: any) {
        let elem = event.target;
        let numberOfPicture = elem.attributes["cell-number"].value;
        let pictureSrc = "url(" + this.imagesSrcs[+numberOfPicture][0] + ")";

        console.log(numberOfPicture);
        elem.style.backgroundImage = pictureSrc;

        this.firstOpenedCard ? this.firstOpenedCard = event.target : this.secondOpenedCard = event.target;
    }

    private shuffle(array: (string | number)[][]): (string | number)[][] {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    stopGame() {
        this.toggleGameStatus();
        window.location.reload();
    }

}
