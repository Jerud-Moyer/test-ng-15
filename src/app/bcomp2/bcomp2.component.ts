import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bcomp2',
  templateUrl: './bcomp2.component.html',
  styleUrls: ['./bcomp2.component.scss']
})
export class Bcomp2Component {
  goToNiece() {
    this._router.navigate(['/cousin-comp/niece/'])
  }

  constructor(private _router: Router) {}

}
