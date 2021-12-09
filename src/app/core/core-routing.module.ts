import { ButtonComponent } from './button/button.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { CoreComponent } from './core.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InsideTheHideBoxComponent } from './inside-the-hide-box/inside-the-hide-box.component';
import { FaqComponent } from './faq/faq.component';
import { StartTodayComponent } from './start-today/start-today.component';
import { LastComponent } from './last/last.component';

const routes: Routes = [
  {
    path:'',
    component:CoreComponent,
    children:[
      {
        path:'',
        component:HomeComponent,
      },
      {
        path:'how-it-works',
        component:HowItWorksComponent,
      },
      {
        path:'inside-the-hide-box',
        component:InsideTheHideBoxComponent,
      },
      {
        path:'faq',
        component:FaqComponent,
      },
      {
        path:'start-today',
        component:StartTodayComponent,
      },
      {
        path:'button',
        component:ButtonComponent,
      },
      {
        path:'last',
        component:LastComponent,
      }
    ],

  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
