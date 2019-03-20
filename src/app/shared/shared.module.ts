import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsComponent } from './tabs/tabs.component';
import { HeaderComponent } from './header/header.component';
import { SearchBarComponent } from './search-bar/search-bar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TabsComponent, HeaderComponent, SearchBarComponent],
  exports:[TabsComponent,HeaderComponent,SearchBarComponent]
})
export class SharedModule { }
