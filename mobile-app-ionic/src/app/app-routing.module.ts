import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {AuthGuard} from './auth.guard';


const routes: Routes = [
   { path: '', loadChildren: './login/login.module#LoginPageModule', canActivate: [AuthGuard] },
   // { path: '', redirectTo: 'app' , pathMatch: 'full'},
  { path: 'app', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'detail/:id', loadChildren: './detail/detail.module#DetailPageModule' },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
