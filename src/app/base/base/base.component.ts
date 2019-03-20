import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit {
  sideNavItemsArray:{}[];

  constructor(
    private route:Router
  ) { }

  ngOnInit() {

    this.sideNavItemsArray=[
      {name:"Timeline",img:"../assets/img/home.svg",link:""},
      {name:"My Books",img:"../assets/img/book-open.svg",link:"/books"},
      {name:"Add Review",img:"../assets/img/add-like.svg",link:"/review"},
      {name:"Notifications",img:"../assets/img/bell.svg",link:"/notifications"}
    ]

    let link=this.route.url;
    switch(link){

      case "/":
        this.sideNavItemsArray[0]['active']="true";
        break;
      case "/users":
        this.sideNavItemsArray[1]['active']="true";
        break;
      case "/riders":
        this.sideNavItemsArray[2]['active']="true";
        break;
      case "/partners":
        this.sideNavItemsArray[3]['active']="true";
        break; 

    }
  }


  navigatePage(linkObj:{link}){


    // this.route.navigate([`${linkObj.link}`]);

  }

}
