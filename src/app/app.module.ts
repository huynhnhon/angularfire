import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { environment } from '../environments/environment.prod';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { ItemService } from './services/item.service';

import { AppComponent } from './app.component';
import { ItemsComponent } from './component/items/items.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { AddItemComponent } from './component/add-item/add-item.component';
import { AuthComponent } from './component/auth/auth.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    NavbarComponent,
    AddItemComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule,   
    FormsModule,    
    AngularFireModule.initializeApp(environment.firebase, 'angularfs'),
    AngularFirestoreModule,
    BrowserAnimationsModule,
  ],
  providers: [ItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
