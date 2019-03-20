import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {
  @Input('nav-items-obj-array') navItemsObj:{}[];
  @Output('nav-item-clicked') navItemClicked=new EventEmitter;

  constructor() { }

  ngOnInit() {
  }

  itemClicked(clickedItem:{}){
  
    this.navItemsObj=this.navItemsObj.filter((item)=>{
        item['active']=false;
        return item;
    })
    clickedItem['active']=true;

    this.navItemClicked.emit({link:clickedItem['link']});

}

}
