import { Injectable } from "@angular/core";
import { ActivatedRoute, Route, Router, Routes } from "@angular/router";
import { BehaviorSubject, Subject, filter, fromEvent, map } from "rxjs";

interface RouteConfigItem {
  breadcrumb: string,
  path: string
}

@Injectable({
  providedIn: 'root'
})
export class ParentBreadcrumbService {
  private blankRoute = {
    breadcrumb: '',
    path: ''
  }
  
  public parentRouteSubject = new BehaviorSubject<RouteConfigItem>(this.blankRoute)
    
  constructor() {
    const sessionRoute = sessionStorage.getItem('parentRoute')
    if(sessionRoute) {
      const routeObj = JSON.parse(sessionRoute)
      this.parentRouteSubject.next(
        routeObj
      )
    }
  }

  setParentRoute(newRoute: RouteConfigItem) {
    console.log('new route IN setter => ', newRoute)
    sessionStorage.setItem('parentRoute', JSON.stringify(newRoute))
    this.parentRouteSubject.next(newRoute)
  }

  getParentRoute() {
    return this.parentRouteSubject.asObservable()
  }

}