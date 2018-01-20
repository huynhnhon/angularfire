import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { environment } from '../environments/environment.prod';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { CoreModule } from './core/core.module';

import { ItemService } from './services/item.service';
import { UserService } from './services/user.service';

import { AppComponent } from './app.component';
import { ItemsComponent } from './component/products/items/items.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { AddItemComponent } from './component/products/add-item/add-item.component';
import { ProductsComponent } from './component/products/products.component';
import { UsersComponent } from './component/users/users.component';
import { LoginComponent } from './component/auth/login/login.component';
import { ProfileComponent } from './component/auth/profile/profile.component';
import { AuthGuard } from './core/auth.guard'
@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    NavbarComponent,
    AddItemComponent,
    ProductsComponent,
    UsersComponent,
    LoginComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule,   
    FormsModule,    
    AngularFireModule.initializeApp(environment.firebase, 'angularfs'),
    CoreModule,
    AngularFirestoreModule,
    BrowserAnimationsModule,
  ],
  providers: [ItemService, UserService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
