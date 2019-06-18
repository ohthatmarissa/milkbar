// import { NgModule } from '@angular/core';
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ClassesComponent } from './classes/classes.component';
import { LocationsComponent } from './locations/locations.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ShopComponent } from './shop/shop.component';
import { NavComponent } from './nav/nav.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'classes', component: ClassesComponent },
    { path: 'locations', component: LocationsComponent },
    { path: 'recipes', component: RecipesComponent },
    { path: 'shop', component: ShopComponent },
    { path:  '', component: NavComponent },

];

// @NgModule({
//     imports: [RouterModule.forRoot(appRoutes)],
//     exports: [RouterModule]
// })
// export class AppRoutingModule { }

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);