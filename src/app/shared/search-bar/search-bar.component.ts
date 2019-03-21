import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  @Output('textChanged') changed=new EventEmitter;
  searchText:string;

  constructor() { }

  ngOnInit() {
  }

  textChanged(){
    this.changed.emit({text:this.searchText});
  }

}
