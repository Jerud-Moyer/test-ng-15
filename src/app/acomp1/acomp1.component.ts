import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-acomp1',
  templateUrl: './acomp1.component.html',
  styleUrls: ['./acomp1.component.scss']
})
export class Acomp1Component {
  goToNestedGuy() {
    this._router.navigate(['/cousin-comp/nephew'])
  }
  goToChild() {
    this._router.navigate(['/second-cousin-comp/other-nephew'])
  }

  constructor(private _router: Router) {

  }
}
