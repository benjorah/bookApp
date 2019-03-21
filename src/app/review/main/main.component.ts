import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  book;

  constructor(private router:Router) {
    this.book={
      title:"Pet Sematary",
      author:"Stephen King",
      imgUrl:"./assets/img/image7.jpg",
      rating:1,
      review:`Sometimes dead is better....When the Creeds move into a beautiful old house in rural Maine, it all seems too good to be true:
       physician father, beautiful wife, charming little daughter, adorable infant son -- and now an idyllic home....`
    }
   }

  ngOnInit() {
  }

  submitReview(){

    this.router.navigate(['home/review/submit'])

  }

}
