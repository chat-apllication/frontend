import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 {
   path : 'account' , 
   loadChildren : () => import('../app/account/account.module').then((m)=>m.AccountModule)   
 },
 {
  path : '' , 
  loadChildren : () => import('../app/chat/chat.module').then((m)=>m.ChatModule)   
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
