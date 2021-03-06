import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',redirectTo:'./core',pathMatch:'full'},
  {
    path:'core',loadChildren:() => import ('./core/core.module').then((mod)=> mod.CoreModule)
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
