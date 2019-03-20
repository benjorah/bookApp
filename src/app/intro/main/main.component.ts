import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  slides:{}[];

  constructor(
    private router:Router
  ) { 
    this.slides=[
      {imageUrl:"./assets/img/book_circle.svg",header:"Read Books", bodyText:"Create your account to get started. After that, you can share books and make friends."},
      {imageUrl:"./assets/img/star_circled.svg",header:"Review Them", bodyText:"Create your account to get started. After that, you can share books and make friends."},
      {imageUrl:"./assets/img/light_bulb.svg",header:"Review Them", bodyText:"Create your account to get started. After that, you can share books and make friends."},


    ]
  }

  ngOnInit() {
  }

  skipIntro(){

    this.router.navigate(['/auth']);
    
  }

}
