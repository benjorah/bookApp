import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-submit-review',
  templateUrl: './submit-review.component.html',
  styleUrls: ['./submit-review.component.scss']
})
export class SubmitReviewComponent implements OnInit {

  books:{}[];

  constructor() {
    this.books=[
      {title:"Scar Tissue",author:"Anthony Kiedis",imgUrl:"./assets/img/image1.jpg"},
      {title:"Eat Awesome",author:"Paul Jarvis ",imgUrl:"./assets/img/image2.jpg"},
      {title:"The Wastelands",author:"Stephen King ",imgUrl:"./assets/img/image3.jpg"}

    ];
   }

  ngOnInit() {
  }

}
