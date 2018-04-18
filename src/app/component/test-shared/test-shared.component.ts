import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-shared',
  templateUrl: './test-shared.component.html',
  styleUrls: ['./test-shared.component.css']
})
export class TestSharedComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  identifier : string = "#00001" ;
  onTest(evt)
  {
    console.log(evt) ;
  }
}
