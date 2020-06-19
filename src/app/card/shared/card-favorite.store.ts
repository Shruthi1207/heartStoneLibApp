import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Storage} from '@ionic/storage';
import {Card} from './card.model';
@Injectable()
export class FavoriteCardStore {
    private _favoriteSubject = new BehaviorSubject({})
    constructor(private storage: Storage) {
        this.loadInitialData();
    }
    get favoriteCards(): Observable<any> {
       return this._favoriteSubject.asObservable(); 
    }
    private loadInitialData() {
        this.storage.get('favoriteCards').then((favoriteCards) => {
            this._favoriteSubject.next(favoriteCards || {});
            const a = this._favoriteSubject.getValue();

        })
            
    }
    public togglecard(card:Card) {
        const favoriteCards = this._favoriteSubject.getValue();
        if(card.favorite) {
            card.favorite = false;
            delete favoriteCards[card.cardId];
          }
            else {
              card.favorite = true;
              favoriteCards[card.cardId]= card;
              
            }
            this.storage.set('favoriteCards', favoriteCards).then(
              () => {
this._favoriteSubject.next(favoriteCards);
              }
            );
          }
    }