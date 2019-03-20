import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReviewRoutingModule } from './review-routing.module';
import { MainComponent } from './main/main.component';
import { SubmitReviewComponent } from './submit-review/submit-review.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    ReviewRoutingModule,
    SharedModule
  ],
  declarations: [MainComponent, SubmitReviewComponent],
  exports: [MainComponent, SubmitReviewComponent]
})
export class ReviewModule { }
