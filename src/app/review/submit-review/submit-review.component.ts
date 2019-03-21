import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-submit-review',
  templateUrl: './submit-review.component.html',
  styleUrls: ['./submit-review.component.scss']
})
export class SubmitReviewComponent implements OnInit {

  books:{}[];

  constructor(private router:Router) {
    this.books=[
      {title:"Scar Tissue",author:"Anthony Kiedis",imgUrl:"./assets/img/image1.jpg"},
      {title:"Eat Awesome",author:"Paul Jarvis ",imgUrl:"./assets/img/image2.jpg"},
      {title:"The Wastelands",author:"Stephen King ",imgUrl:"./assets/img/image3.jpg"}

    ];
   }

  ngOnInit() {
  }


  addFriends(){
    this.router.navigate(['home/books']);
  }

}
