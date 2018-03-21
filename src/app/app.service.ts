import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Event, NavigationEnd, Params, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import * as moment from 'moment';
import { Moment } from 'moment';

@Injectable()
export class AppService {

  apps: any[];

  app: any;
  onAppChanged: BehaviorSubject<number>;

  appId: number;
  onAppIdChanged: BehaviorSubject<number>;

  appBundle: string;
  onAppBundleChanged: BehaviorSubject<string>;

  dateStart: string;
  dateEnd: string;

  constructor (private http: HttpClient,
               private router: Router,
               private route: ActivatedRoute) {
    // this.router.events.subscribe((event: Event) => {
    //   if (this.route.firstChild) {
    //     console.log(7);
    //
    //     this.route.firstChild.url.subscribe((params: Params) => {
    //       console.log(1);
    //
    //       this.appId = +params[0].path;
    //       this.onAppIdChanged.next(this.appId);
    //
    //       this.appBundle = params[1].path;
    //       this.onAppBundleChanged.next(this.appBundle);
    //     });
    //   }
    // });

    this.onAppIdChanged = new BehaviorSubject(null);
    this.onAppBundleChanged = new BehaviorSubject(null);

    this.onAppIdChanged
      .subscribe((appId: number) => {
        if (appId) {
          this.appId = appId;
        }
      });

    this.onAppBundleChanged
      .subscribe((appBundle: string) => {
        if (appBundle) {
          this.appBundle = appBundle;
        }
      });

    this.dateStart = moment().add(-28, 'days').format('YYYY-MM-DD');
    this.dateEnd = moment().add(0, 'days').format('YYYY-MM-DD');
  }

  getApps () {
    this.http.get('http://picsart.tools:8484/stage/api/v1/apps')
      .subscribe((res: any) => {
        this.apps = res;

        // this.onAppIdChanged.subscribe((id: number) => {
        //   console.log(6, id);
        //   if (id) {
        //     this.apps.map(app => {
        //       if (app.id === id) {
        //         this.app = app;
        //         this.onAppChanged.next(this.app);
        //
        //         console.log(2);
        //       }
        //     });
        //   }
        // });
      });
  }

}
