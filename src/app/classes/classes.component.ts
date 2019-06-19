import { Component } from '@angular/core';
import { Class } from '../class.model';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css']
})
export class ClassesComponent {
  classes: Class[] = [
    new Class("Birthday Cake Class", "NYC", "./assets/img/NYC-Bday-class_800x.jpg", "What’s that incredible smell coming from the kitchen? Nostalgia. Here, you’ll build your own 6” Milk Bar B’day cake. Learn how to layer vanilla funfetti cake, frosting and crumbs with your favorite childhood flavors and complete the look with our unfrosted, peek-a-boo sides. Then, turn your cake scraps into scrumptious little B’day truffles. But don’t stash them in your locker! Take home all your hard work.What’s that incredible smell coming from the kitchen? Nostalgia. Here, you’ll build your own 6” Milk Bar B’day cake. Learn how to layer vanilla funfetti cake, frosting and crumbs with your favorite childhood flavors and complete the look with our unfrosted, peek-a-boo sides. Then, turn your cake scraps into scrumptious little B’day truffles. But don’t stash them in your locker! Take home all your hard work.", 1 ),
    new Class("Chocolate Birthday Cake Class", "NYC", "./assets/img/NYC-Bday-class_800x.jpg", "Flashback to your childhood self. The one that was WAY more into chocolate than vanilla. This one’s for you, buddy. Learn how we layer decadent chocolate, chocolate-chip cake with our OG vanilla b’day frosting and OG vanilla b’day crumbs to create this crowd pleasing 6” cake. We’ll also teach you how to turn your scraps into fudgy, Chocolate B’day Truffles. Take home your creations or turn them in for extra credit at the end. Just kidding. Take them home.", 2),
    new Class("Strawberry Lemon Cake Class", "NYC", "./assets/img/NYC-Bday-class_800x.jpg", "Leave your Trapper Keeper™ at home, kids. We’ve got all the goods you need. Here, you’ll learn how we layer vanilla cake, lemon cheesecake and milk crumbs with pickled strawberry jam and frosting to construct this strawberry-fanatics’ dream. Then we’ll teach you how to take your cake scraps and turn them into strawberry lemon truffles. Walk away with a 6” cake, a batch of truffles and serious strawberry lemon skills.", 3),
    new Class("Milk Bar Pie Class", "NYC", "./assets/img/NYC-Bday-class_800x.jpg", "Pop quiz. What makes this classic so mind-bendingly delicious? Find out when you make and bake your own sweet, salty and oh-so-scrumptious Milk Bar Pie. You’ll master molding the oat cookie crust and mixing the gooey buttery filling, all while taste testing along the way. While it bakes, we'll also teach you the ins and outs of our famous cake truffles. Take home your 10” pie and some truffles or polish it off ASAP.", 4),
    new Class("Chocolate Caramel Pretzel Cake Class", "NYC", "./assets/img/NYC-Bday-class_800x.jpg", "If you were majoring in dangerously delicious desserts, this class would be mandatory. Ours is totally voluntary. Here, you'll take one of our favorite snacktime standbys—chocolate-covered pretzels—and give them the Milk Bar treatment. Build layers of double chocolate chip cake, dulce de leche, and pretzel crumbs, then amp it all up with pretzel cheesecake and dulce de leche frosting to create the ultimate bite. You'll walk away from class with a 6” cake, a batch of truffles and a seriously satisfied sweet (and salty) tooth.", 5)
  ];

}
