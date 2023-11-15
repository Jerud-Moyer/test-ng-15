import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { BreadcrumbModule, BreadcrumbService } from 'angular-crumbs-2';
import { MaterialModule } from 'src/app/shared/material/material-module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ParentBreadcrumbService } from 'src/shared/services/parentBreadcrumbService';
import { AnalysisButtonsComponent } from './analysis-buttons/analysis-buttons.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

@NgModule({
  declarations: [
    AppComponent,
    BreadcrumbComponent,
    // AnalysisButtonsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BreadcrumbModule,
    MaterialModule,
    BrowserAnimationsModule,
    // MatButtonToggleModule
  ],
  providers: [ParentBreadcrumbService, BreadcrumbService],
  bootstrap: [AppComponent]
})
export class AppModule { }
