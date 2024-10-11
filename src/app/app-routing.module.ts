import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BenelliComponent } from './pages/benelli/benelli.component';
import { HomeComponent } from './pages/home/home.component';
import { KtmComponent } from './pages/ktm/ktm.component';
import { KawasakiComponent } from './pages/kawasaki/kawasaki.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { DetailsComponent } from './pages/details/details.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'benelli',
    component: BenelliComponent,
  },
  {
    path: 'ktm',
    component: KtmComponent,
  },
  {
    path: 'kawasaki',
    component: KawasakiComponent,
  },
  {
    path: 'detail',
    component: DetailsComponent,
  },

  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
