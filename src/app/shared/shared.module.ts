import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsComponent } from './tabs/tabs.component';
import { HeaderComponent } from './header/header.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { FormsModule } from '@angular/forms';
import { BooksComponent } from './books/books.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [TabsComponent, HeaderComponent, SearchBarComponent, BooksComponent, ButtonComponent],
  exports:[TabsComponent,HeaderComponent,SearchBarComponent,BooksComponent,ButtonComponent]
})
export class SharedModule { }
