import {Component, Input} from '@angular/core';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
@Component ({
 selector: 'app-card-list',
 templateUrl:  './card-list.component.html'
})

export class CardListComponent {
@Input() items: any[] = [];
@Input() listName: string;

@Input() navigateTo: any;
}