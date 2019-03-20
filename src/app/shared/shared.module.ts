import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsComponent } from './tabs/tabs.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TabsComponent, HeaderComponent],
  exports:[TabsComponent,HeaderComponent]
})
export class SharedModule { }
