import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './component/auth/auth.component';
import { ItemsComponent } from './component/items/items.component';
import { AddItemComponent } from './component/add-item/add-item.component';

const routes: Routes = [
    // {
    //     path: '',
    //     component: AddItemComponent
    // },
    // {
    //     path: 'login',
    //     component: AuthComponent
    // },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
