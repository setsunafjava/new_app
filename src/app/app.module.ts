import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import 'hammerjs';
import { SharedModule } from './core/modules/shared.module';
import { AppComponent } from './app.component';
import { FuseMainModule } from './main/main.module';
import { FuseSplashScreenService } from './core/services/splash-screen.service';
import { FuseConfigService } from './core/services/config.service';
import { FuseNavigationService } from './core/components/navigation/navigation.service';
import { FuseSampleModule } from './main/content/sample/sample.module';
import { TranslateModule } from '@ngx-translate/core';
import { AppService } from './app.service';

const appRoutes: Routes = [
  {
    path: 'events-attributes/events/:app/:bundle',
    loadChildren: './main/content/events-attributes/events/events.module#EventsModule'
  },
  {
    path: 'analytics/acquisition/:app/:bundle',
    loadChildren: './main/content/analytics/acquisition/acquisition.module#AcquisitionModule'
  },
  {
    path: 'segments/:app/:bundle',
    loadChildren: './main/content/segments/segments.module#SegmentsModule'
  },
  {
    path: '**',
    redirectTo: 'events-attributes/events/1/com.picsart.studio'
  }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    SharedModule,
    TranslateModule.forRoot(),
    FuseMainModule,
    FuseSampleModule
  ],
  providers: [
    FuseSplashScreenService,
    FuseConfigService,
    FuseNavigationService,
    AppService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
