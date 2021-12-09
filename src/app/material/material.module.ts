import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTreeModule} from '@angular/material/tree';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';





@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatTreeModule,
    MatListModule,
    MatGridListModule
  ],
  exports:[
    MatTreeModule,
    MatListModule,
    MatGridListModule

  ]
})
export class MaterialModule { }
