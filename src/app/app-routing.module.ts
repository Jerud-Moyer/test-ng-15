import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Acomp1Component } from './acomp1/acomp1.component';
import { Bcomp1Component } from './bcomp1/bcomp1.component';
import { TestScrollbersComponent } from './test-scrollbers/test-scrollbers.component';

const routes: Routes = [
  {
    path: 'home',
    component: Acomp1Component,
    data: { parentBreadcrumb: 'This is Home' },
    children: []
  },
  {
    path: 'test',
    component: Bcomp1Component,
    data: { parentBreadcrumb: 'TEST' },
  },
  {
    path: 'cousin-comp',
    loadChildren: () => import("./mod-b/mod-b.module").then(m => m.ModBModule),
  },
  {
    path: 'second-cousin-comp',
    loadChildren: () => import("./mod-a/mod-a.module").then(m => m.ModAModule),
  },
  {
    path: 'test-scrollbars',
    component: TestScrollbersComponent,
    data: { breadcrumb: 'Scrollber Derp' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
