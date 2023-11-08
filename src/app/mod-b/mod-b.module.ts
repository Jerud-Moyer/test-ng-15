import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Bcomp2Component } from '../bcomp2/bcomp2.component';
import { Bcomp1Component } from '../bcomp1/bcomp1.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../shared/material/material-module';



@NgModule({
  declarations: [
    Bcomp2Component,
    Bcomp1Component
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild([
      {
        path: '',
        children: [
          { path: 'nephew', component: Bcomp2Component, data: {breadcrumb: 'Nephew'} },
          {
            path: 'niece', component: Bcomp1Component, data: {breadcrumb: 'Niece'}
          }
        ]
      }
    ])
  ]
})
export class ModBModule { }
