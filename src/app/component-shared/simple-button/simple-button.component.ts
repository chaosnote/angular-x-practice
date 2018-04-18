import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'simple-button',
  templateUrl: './simple-button.component.html',
  styleUrls: ['./simple-button.component.css']
})
export class SimpleButtonComponent implements OnInit
{

  constructor() { }

  ngOnInit()
  {
  }

  @Input()
  identifier : string ;

  @Output()
  test = new EventEmitter<any>();
  onClick(evt)
  {
    console.log(evt) ;
    // this.test.emit(evt);
    this.test.emit(this.identifier);
  }
}