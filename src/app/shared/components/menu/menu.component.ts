import { Component } from '@angular/core';

@Component({
  selector: 'ap-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent {

  isShow: boolean = false;

  toggle() {
    this.isShow = !this.isShow;
  }
}
