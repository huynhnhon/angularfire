import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Item } from '../models/Item';
import { Observable } from 'rxjs/Observable';

@Injectable()

export class ItemService {

  itemsCollection: AngularFirestoreCollection<Item>;
  items: Observable<Item[]>;
  itemsDoc: AngularFirestoreDocument<Item>;

  constructor(public afs: AngularFirestore) {
    this.itemsCollection = this.afs.collection('items', ref => ref.orderBy('title', 'asc'));
    this.items = this.itemsCollection.snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Item;
        data.id = a.payload.doc.id;
        return data;
      });
    });
  }

  getItems() {
    return this.items;
  }

  addItem(item: Item) {
    this.itemsCollection.add(item);
  }

  deleteItem(item: Item) {
    this.itemsDoc = this.afs.doc(`items/${item.id}`);
    this.itemsDoc.delete();
  }

  update(item: Item) {
    this.itemsDoc = this.afs.doc(`items/${item.id}`);
    this.itemsDoc.update(item);
  }

}

