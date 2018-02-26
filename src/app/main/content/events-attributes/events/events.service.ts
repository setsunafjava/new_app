import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class EventsService implements Resolve<any> {
  events: any[];

  constructor (private http: HttpClient) { }

  /**
   * Resolve
   * @param {ActivatedRouteSnapshot} route
   * @param {RouterStateSnapshot} state
   * @returns {Observable<any> | Promise<any> | any}
   */
  resolve (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    return new Promise((resolve, reject) => {
      Promise.all([
        this.getEvents()
      ]).then(() => {
        resolve();
      }, reject);
    });
  }

  getEvents (): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get('http://picsart.tools:8484/stage/api/v1/apps/1/events')
        .subscribe((res: any) => {
          this.events = res;
          resolve(res);
        }, reject);
    });
  }
}
