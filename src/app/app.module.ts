import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { BreadcrumbModule } from 'angular-crumbs-2';
import { MaterialModule } from 'src/app/shared/material/material-module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ParentBreadcrumbService } from 'src/shared/services/parentBreadcrumbService';

@NgModule({
  declarations: [
    AppComponent,
    BreadcrumbComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BreadcrumbModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [ParentBreadcrumbService],
  bootstrap: [AppComponent]
})
export class AppModule { }
