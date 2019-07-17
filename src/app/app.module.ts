import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routing';
import  masterFirebaseConfig from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { ShopComponent } from './shop/shop.component';
import { ClassesComponent } from './classes/classes.component';
import { RecipesComponent } from './recipes/recipes.component';
import { LocationsComponent } from './locations/locations.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ClassDetailComponent } from './class-detail/class-detail.component';
import { ClassPipe } from './class.pipe';
import { ClassService } from './class.service';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ShopComponent,
    ClassesComponent,
    RecipesComponent,
    LocationsComponent,
    AboutComponent,
    HomeComponent,
    ClassDetailComponent,
    ClassPipe,
  ],
  imports: [
    BrowserModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [
    ClassService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
