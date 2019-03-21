import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  books:{}[];

  constructor(private router:Router) {
    this.books=[
      {title:"Remote: Office Not Required",author:"Jason Fried",imgUrl:"./assets/img/image4.jpg",rating:2},
      {title:"Papillon",author:"Henri Charriere",imgUrl:"./assets/img/image5.jpg",rating:4},
      {title:"The Dark Tower: The Gunslinger",author:"Stephen King",imgUrl:"./assets/img/image6.jpg",rating:1}

    ];
   }

  ngOnInit() {
  }


  writeReview(){
    this.router.navigate(['home/review']);
  }

}
