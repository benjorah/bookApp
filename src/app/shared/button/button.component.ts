import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input('message') message;
  @Output('clicked') clicked=new EventEmitter;
  

  constructor() { }

  ngOnInit() {
  }


  buttonClicked(){
    this.clicked.emit();
  }

}
