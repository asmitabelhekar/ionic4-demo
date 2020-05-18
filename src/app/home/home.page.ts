import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor( public menuController : MenuController) {
    this.menuController.enable(true);
  }

  openFirst() {
    this.menuController.enable(true, 'first');
    this.menuController.open('first');
  }

  openEnd() {
    this.menuController.open('end');
  }

  openCustom() {
    this.menuController.enable(true, 'custom');
    this.menuController.open('custom');
  }
}
