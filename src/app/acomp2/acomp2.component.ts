import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-acomp2',
  templateUrl: './acomp2.component.html',
  styleUrls: ['./acomp2.component.scss']
})
export class Acomp2Component {
  goToNephewKid() {
    this._router.navigate(['second-cousin-comp/other-nephew/nephew-kid'])
  }

  constructor(private _router: Router) {}
}
