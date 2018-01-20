import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../../services/item.service';
import { Item } from '../../../models/Item';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  item: Item = {
    product_name: '',
    create_at: Date.now()
  };

  constructor(private itemService: ItemService) { }

  ngOnInit() {
  }

  onSubmit() {
    if (this.item.product_name !== '') {
      this.itemService.addItem(this.item);
      this.item.product_name = '';
    }
  }

}
