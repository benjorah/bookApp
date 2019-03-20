import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BaseComponent } from './base/base/base.component';



const routes: Routes = [
  {
  path:'auth', 
  loadChildren:'./auth/auth.module#AuthModule'
  },

  {
    path:'', 
    loadChildren:'./intro/intro.module#IntroModule'
  
    },

    {
      path:'home', 
      component:BaseComponent,
      children:
    [
      {
        path:'books',
        loadChildren:'./books/books.module#BooksModule'
      }
  ]
    
      },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
