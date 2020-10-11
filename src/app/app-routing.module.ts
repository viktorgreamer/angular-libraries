import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./components/documentation/components.module').then(m => m.ComponentsModule)
  },
  {
    path: 'pipes',
    loadChildren: () => import('./components/documentation/pipe-documentation/pipe.module').then(m => m.PipeModule)
  },
  {
    path: 'services',
    loadChildren: () => import('./components/documentation/services-documentation/services.module').then(m => m.ServicesModule)
  },
  {
    path: 'directives',
    loadChildren: () => import('./components/documentation/directives-documentation/directives.module').then(m => m.DirectivesModule)
  },
  {
    path: 'other',
    loadChildren: () => import('./components/documentation/directives-documentation/directives.module').then(m => m.DirectivesModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
