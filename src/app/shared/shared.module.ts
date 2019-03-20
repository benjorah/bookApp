import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsComponent } from './tabs/tabs.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TabsComponent],
  exports:[TabsComponent]
})
export class SharedModule { }
