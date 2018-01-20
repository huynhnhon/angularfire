import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './component/auth/profile/profile.component';
import { ItemsComponent } from './component/products/items/items.component';
import { AddItemComponent } from './component/products/add-item/add-item.component';
import { ProductsComponent } from './component/products/products.component';
import { UsersComponent } from './component/users/users.component';
import { AuthGuard } from './core/auth.guard'
const routes: Routes = [
    {
        path: '',
        component: ProductsComponent
    },
    {
        path: 'users',
        component: UsersComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'login',
        component: ProfileComponent        
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
