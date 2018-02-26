import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsComponent } from './events.component';
import { EventsService } from './events.service';

const routes: Routes = [
  {
    path: '**',
    component: EventsComponent,
    resolve: {
      data: EventsService
    }
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  declarations: [
    EventsComponent
  ],
  providers: [
    EventsService
  ]
})
export class EventsModule {}
