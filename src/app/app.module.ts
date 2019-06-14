import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { ShopComponent } from './shop/shop.component';
import { ClassesComponent } from './classes/classes.component';
import { RecipesComponent } from './recipes/recipes.component';
import { LocationsComponent } from './locations/locations.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ShopComponent,
    ClassesComponent,
    RecipesComponent,
    LocationsComponent,
    AboutComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
