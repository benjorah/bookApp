import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IntroRoutingModule } from './intro-routing.module';
import { MainComponent } from './main/main.component';
import { SlideModule } from '../slide/slide.module';
import { SliderComponent } from '../slide/slider/slider.component';

@NgModule({
  imports: [
    CommonModule,
    IntroRoutingModule,
    SlideModule
  ],
  declarations: [MainComponent,SliderComponent],
})
export class IntroModule { }
