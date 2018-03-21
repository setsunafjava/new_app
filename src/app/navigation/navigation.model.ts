import { FuseNavigationModelInterface } from '../core/components/navigation/navigation.model';

export class FuseNavigationModel implements FuseNavigationModelInterface {
  public model: any[];

  constructor () {
    this.model = [
      {
        'id': 'applications',
        'title': 'Applications',
        'type': 'group',
        'children': [
          {
            'id': 'events_attributes',
            'title': 'Events Attributes',
            'type': 'collapse',
            'icon': 'dashboard',
            'children': [
              {
                'id': 'events',
                'title': 'Events',
                'type': 'item',
                'url': '/events_attributes/events'
              }
            ]
          },
          // {
          //   'id': 'analytics',
          //   'title': 'Analytics',
          //   'type': 'collapse',
          //   'icon': 'dashboard',
          //   'children': [
          //     {
          //       'id': 'acquisition',
          //       'title': 'Acquisition',
          //       'type': 'item',
          //       'url': '/analytics/acquisition'
          //     }
          //   ]
          // },
          {
            'id': 'segments',
            'title': 'Segments',
            'type': 'item',
            'icon': 'dashboard',
            'url': '/segments'
          },
          // {
          //   'id': 'sample',
          //   'title': 'Sample',
          //   'translate': 'NAV.SAMPLE.TITLE',
          //   'type': 'item',
          //   'icon': 'email',
          //   'url': '/sample',
          //   'badge': {
          //     'title': 25,
          //     'translate': 'NAV.SAMPLE.BADGE',
          //     'bg': '#F44336',
          //     'fg': '#FFFFFF'
          //   }
          // }
        ]
      }
    ];
  }
}
