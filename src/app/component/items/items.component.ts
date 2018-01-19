import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../services/item.service';
import { Item } from '../../models/Item';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css'],
  animations: [

    trigger('goals', [
      transition('* => *', [

        query(':enter', style({ opacity: 0 }), { optional: true }),

        query(':enter', stagger('300ms', [
          animate('.6s ease-in', keyframes([
            style({ opacity: 0, transform: 'translateY(-75%)', offset: 0 }),
            style({ opacity: .5, transform: 'translateY(35px)', offset: 0.3 }),
            style({ opacity: 1, transform: 'translateY(0)', offset: 1.0 }),
          ]))]), { optional: true })
      ])
    ])

  ]
})
export class ItemsComponent implements OnInit {

  items: Item[];
  editState: boolean = false;
  updateItem: Item[];

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.itemService.getItems().subscribe(items => {
      this.items = items;
    });
  }

  delItem(event, item: Item) {
    const accept = confirm('Delete Collection?');
    if (accept === true) {
      this.itemService.deleteItem(item);
    }
  }

  editItem(event, item) {
    this.editState = true;
    this.updateItem = item;
  }

  collapse() {
    this.editState = false;
    console.log(this.editState);
    this.updateItem = null;
  }

  update(item: Item) {
    this.itemService.update(item);
    this.collapse();
  }

}
