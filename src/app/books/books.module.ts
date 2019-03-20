import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { MainComponent } from './main/main.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    BooksRoutingModule,
    SharedModule
  ],
  declarations: [MainComponent],
  exports:[MainComponent]
})
export class BooksModule { }
