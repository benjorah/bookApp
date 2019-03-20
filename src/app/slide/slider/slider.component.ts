import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  @Input('slides')slides:{imageUrl:string,header:string,bodyText:string}[];
  @Output('slideOver') slideOver= new EventEmitter;

  currentSlide={imageUrl:"",header:"",bodyText:""};
  currentIndex=0;
  showSlide=true;

  constructor() { }

  ngOnInit() {

    this.currentSlide=Object.assign({},this.slides[0]);
    
  }

  moveForward(){
    this.showSlide=!this.showSlide;
    if(this.currentIndex==this.slides.length-1){
      this.skipSlide();

    }

    this.currentIndex+=1;
    

    setTimeout(()=>{
    this.currentSlide=Object.assign({},this.slides[this.currentIndex]);
      this.showSlide=!this.showSlide;
    },600);
  }

  skipSlide(){
    this.slideOver.emit({over:true});
  }

}
