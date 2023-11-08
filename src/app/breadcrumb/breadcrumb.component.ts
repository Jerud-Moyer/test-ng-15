import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivationEnd, Event, NavigationEnd, Router, Routes, RoutesRecognized } from '@angular/router';
import { BreadcrumbService } from 'angular-crumbs-2';
import { filter } from 'rxjs';
import { ParentBreadcrumbService } from 'src/app/shared/services/parent-breadcrumb.service';

interface RouteConfigItem {
  breadcrumb: string,
  path: string
}

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})

export class BreadcrumbComponent implements OnInit, OnDestroy {

  constructor(private breadcrumbService: BreadcrumbService, private router: Router, private parentBreadcrumbService: ParentBreadcrumbService) { 
    
  }

  // private history: RouteConfigItem[] = []
  private parentRoute: RouteConfigItem = {
    breadcrumb: '',
    path: ''
  }

  private loadRouting(): void {
    this.parentBreadcrumbService.parentRouteSubject.subscribe(parentRoute => {
      console.log('in the subscribe (component) => ', parentRoute)
      this.parentRoute = parentRoute
    })

    this.router.events
      .pipe(filter((event) : event is ActivationEnd => event instanceof ActivationEnd))
      .subscribe(({snapshot}: ActivationEnd) => {
        if(snapshot?.data && snapshot.data['parentBreadcrumb']) {
          const currentUrl = this.router.url
          const parentUrl = `/${this.parentRoute.path}`
          const newEntry = {
            breadcrumb: snapshot.data['parentBreadcrumb'] || '',
            path: snapshot.routeConfig?.path || ''
          }

          if(currentUrl !== parentUrl) {
            this.parentBreadcrumbService.setParentRoute(newEntry);
          }
        }
      })
  }


  public getLastUrl(): string {
    console.log('what do we get here? => ', this.parentRoute)
    return this.parentRoute.path;
  }

  public getLastCrumb(): string {
    console.log('this thing fire on refresh? => ', this.parentRoute)
    return this.parentRoute.breadcrumb;
  }

  ngOnInit(): void {
    this.breadcrumbService.breadcrumbChanged.subscribe(() => {
      
    });
    
    this.loadRouting();
  }

  ngOnDestroy(): void {
    this.breadcrumbService.breadcrumbChanged.unsubscribe();
  }

  navigate(url: string) {
    this.router.navigateByUrl(url);
  }

}
