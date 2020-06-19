export interface CardDeck {
    name: string;
    types: string[];
}

export interface Card {
attack: number;
cardId: string;
cardSet: string;
cost: number;
health: number;
dbfId: string;
faction: string;
img: string;
imgGold: string;
locale: string;
name: string;
playerClass: string;
rarity: string;
type: string;
text: string;
favorite: boolean

}