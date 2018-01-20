import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { User } from '../models/User';
import { Observable } from 'rxjs/Observable';

@Injectable()

export class UserService {

  usersCollection: AngularFirestoreCollection<User>;
  users: Observable<User[]>;
  usersDoc: AngularFirestoreDocument<User>;

  constructor(public afs: AngularFirestore) {
    this.usersCollection = this.afs.collection('connection');
    this.users = this.usersCollection.snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as User;
        data.id = a.payload.doc.id;
        return data;
      });
    });
  }

  getUsers() {
    return this.users;
  }
  addUser(user: User) {
    this.usersCollection.add(user);
  }

  deleteUser(user: User) {
    let id: string = user.id;
    this.usersDoc = this.usersCollection.doc(id);
    this.usersDoc.delete();
  }

  update(user: User) {
    let id: string = user.id;
    this.usersDoc = this.usersCollection.doc(id);
    this.usersDoc.update(user);
  }

}