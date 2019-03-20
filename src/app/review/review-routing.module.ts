import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { SubmitReviewComponent } from './submit-review/submit-review.component';

const routes: Routes = [
  {
    path:"",
    component:MainComponent
  },


  {
    path:"submit",
    component:SubmitReviewComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReviewRoutingModule { }
