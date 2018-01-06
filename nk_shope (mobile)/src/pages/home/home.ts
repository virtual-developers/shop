import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  splash = true;
 
  constructor(public navCtrl: NavController) {
  
  }

  ionViewDidLoad() {
    
    console.log('didload');
    setTimeout(() => {this.splash = false;}, 4000);
  }


}
