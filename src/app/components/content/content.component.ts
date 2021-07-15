import { ItemControlService } from './../../services/settings.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface ImagesSrc {
    src: string,
    num: number,
}

@Component({
    selector: 'app-content',
    templateUrl: './content.component.html',
    styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
    gameOn: boolean = false;
    columns: number[] = [];
    rows: number[] = [];
    imagesSrcs: ImagesSrc[] = [];
    firstOpenedCard: any = undefined;
    secondOpenedCard: any = undefined;
    cells: number[] = [];
    totalCards: number = 0;
    openedCards: number = 0;
    areaBlocked: boolean = false


    constructor(private itemControlService: ItemControlService, private router: Router) {
    }

    ngOnInit(): void {
    }

    private toggleGameStatus() {
        this.gameOn = !this.gameOn;
    }

    startGame() {
        this.toggleGameStatus();
        let cardsInTable = this.itemControlService.getCardsInRowAndColumn();

        this.totalCards = +cardsInTable.totalCards;
        this.rows = [...Array(cardsInTable.cardsInColumn).keys()];
        this.columns = [...Array(cardsInTable.cardsInRow).keys()];
        console.log(this.rows)
        this.imagesSrcs = this.getImagesSrcs(+cardsInTable.totalCards);
        this.cells = [...Array(cardsInTable.totalCards).keys()]
    }

    private getImagesSrcs(n: number): ImagesSrc[] {
        let array = [];
        let imgSrc: string;

        for (let i = 0; i < n / 2; i++) {
            imgSrc = "./../../../assets/pictures/" + i + ".png"; //   ./../../../assets/pictures/ for localhost, /MemoryGame/assets/pictures/ gpages

            array.push({ src: imgSrc, num: i });
            array.push({ src: imgSrc, num: i });

        }
        return this.shuffle(array);
    }

    checkCard(event: any) {
        if (this.areaBlocked) return;
        let elem = event.target;
        if ((this.openedCards < this.totalCards) && (elem.attributes["in-game"].value == "true")) {
            let numberOfPicture = elem.attributes["cell-number"].value;

            let pictureSrc = "url(" + this.imagesSrcs[+numberOfPicture].src + ")";

            elem.style.backgroundImage = pictureSrc;

            if (this.firstOpenedCard != elem) {
                !this.firstOpenedCard ? this.firstOpenedCard = elem : this.secondOpenedCard = elem;
            }


            if (this.firstOpenedCard && this.secondOpenedCard) {
                if (this.firstOpenedCard.attributes["data-value"].value == this.secondOpenedCard.attributes["data-value"].value) {
                    this.firstOpenedCard.attributes["in-game"].value = this.secondOpenedCard.attributes["in-game"].value = "false";
                    this.firstOpenedCard.classList.add("done");
                    this.secondOpenedCard.classList.add("done");
                    this.openedCards += 2;
                }
                this.areaBlocked = true
                setTimeout(() => {
                    this.firstOpenedCard.style.backgroundImage = this.secondOpenedCard.style.backgroundImage = '';
                    this.firstOpenedCard = this.secondOpenedCard = undefined;
                    this.areaBlocked = false;
                    if (this.openedCards == this.totalCards) {
                        alert("You have won!");
                        this.stopGame();
                    }

                }, 1000)

            }
        }
    }

    private shuffle(array: ImagesSrc[]): ImagesSrc[] {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    stopGame() {
        this.toggleGameStatus();
        this.reloadComponent();
    }


    reloadComponent() {
        let currentUrl = this.router.url;
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigate([currentUrl]);
    }
}
