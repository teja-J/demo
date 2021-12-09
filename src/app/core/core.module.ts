import { HeadNavComponent } from './head-nav/head-nav.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { CoreComponent } from './core.component';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { InsideTheHideBoxComponent } from './inside-the-hide-box/inside-the-hide-box.component';
import { HeaderComponent } from './header/header.component';
import { FaqComponent } from './faq/faq.component';
import { StartTodayComponent } from './start-today/start-today.component';
import { ButtonComponent } from './button/button.component';
import { LastComponent } from './last/last.component';


@NgModule({
  declarations: [
    CoreComponent,
    AboutComponent,
    GalleryComponent,
    HeadNavComponent,
    HomeComponent,
    HowItWorksComponent,
    InsideTheHideBoxComponent,
    HeaderComponent,
    FaqComponent,
    StartTodayComponent,
    ButtonComponent,
    LastComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule
  ],
  exports: [
    AboutComponent,
    GalleryComponent,
    HeadNavComponent
  ]
})
export class CoreModule { }
