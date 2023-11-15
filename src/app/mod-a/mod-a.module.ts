import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Acomp1Component } from '../acomp1/acomp1.component';
import { Acomp2Component } from '../acomp2/acomp2.component';
import { MaterialModule } from '../shared/material/material-module';
import { RouterModule } from '@angular/router';
import { AnalysisButtonsComponent } from '../analysis-buttons/analysis-buttons.component'
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { TestScrollbersComponent } from '../test-scrollbers/test-scrollbers.component';



@NgModule({
  declarations: [
    Acomp1Component,
    Acomp2Component,
    AnalysisButtonsComponent,
    TestScrollbersComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    MatButtonToggleModule,
    MatSlideToggleModule,
    RouterModule.forChild([
      {
        path: '',
        children: [
          {
            path: 'other-nephew',
            component: Acomp2Component,
            data: {breadcrumb: 'Other Nephew'},
            children: [
              {
                path: 'nephew-kid',
                component: Acomp1Component,
                data: {breadcrumb: 'Second Nephew'}
              }
            ]
          }
        ]
      }
    ])
  ]
})
export class ModAModule { }
