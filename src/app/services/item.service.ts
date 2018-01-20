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
    this.itemsCollection = this.afs.collection('connection').doc('dV9q8KDEn4EUboYYHiNo').collection('products');
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
    let id: string = item.id;
    this.itemsDoc = this.itemsCollection.doc(id);
    this.itemsDoc.delete();
  }

  update(item: Item) {
    let id: string = item.id;
    this.itemsDoc = this.itemsCollection.doc(id);
    this.itemsDoc.update(item);
  }

}

