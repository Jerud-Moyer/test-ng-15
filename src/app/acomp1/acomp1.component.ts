import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-acomp1',
  templateUrl: './acomp1.component.html',
  styleUrls: ['./acomp1.component.scss']
})
export class Acomp1Component implements OnInit {
  goToNestedGuy() {
    this._router.navigate(['/cousin-comp/nephew'])
  }
  goToChild() {
    this._router.navigate(['/second-cousin-comp/other-nephew'])
  }
  goToScrollbars() {
    this._router.navigate(['/test-scrollbars'])
  }

  constructor(private _router: Router) {

  }

  ngOnInit() {
    const resizebar = document.getElementById('resizebar');
    const leftSide: HTMLElement = resizebar?.previousElementSibling as HTMLElement;
    const rightSide: HTMLElement = resizebar?.nextElementSibling as HTMLElement;

    let x = 0;
    let logWidth = 0;

    const logMouseMove = function (e: any) {
      let dx = e.clientX - x;
      if(resizebar && resizebar.parentElement) {
        const newWidth = Math.max(10, ((logWidth + dx) * 100) / resizebar.parentElement.getBoundingClientRect().width);
        leftSide.style.width = `${newWidth}%`;
        rightSide.style.width = `${100 - newWidth}%`;
      }
    }

    const logMouseUp = function () {
      if(resizebar) {
        resizebar.style.removeProperty('cursor');
        document.body.style.removeProperty('cursor');
        document.removeEventListener('mousemove', logMouseMove);
        document.removeEventListener('mouseup', logMouseUp);
  
        document.body.style.removeProperty('user-select');
        document.body.style.removeProperty('pointer-events');
      }
    }

    const logMouseDown = function (e: any) {
      x = e.clientX;
      logWidth = leftSide.getBoundingClientRect().width;
      document.addEventListener('mousemove', logMouseMove);
      document.addEventListener('mouseup', logMouseUp);

      document.body.style.userSelect = 'none';
      document.body.style.pointerEvents = 'none';
    }

    resizebar?.addEventListener('mousedown', logMouseDown);
  }
}
