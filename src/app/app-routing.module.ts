import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeBaseComponent } from './home-base/home-base.component';
import { HomeColorOthersComponent } from './home-color-others/home-color-others.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent,
    children: [
      { path: 'color', component: HomeBaseComponent ,
      children: [
        { path: 'other', component: HomeColorOthersComponent }
      ]}
    ]
  },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
