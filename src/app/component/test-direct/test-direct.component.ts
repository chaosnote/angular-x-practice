import { Component, OnInit, ViewChild } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-test-direct',
  templateUrl: './test-direct.component.html',
  styleUrls: ['./test-direct.component.css']
})
export class TestDirectComponent implements OnInit
{

  constructor() { }

  ngOnInit()
  {
  }

  onclick()
  {
    console.log(this.myAccount.invalid); // 是否為無效值
    console.log(this.myAccount.errors) ; // 錯誤資訊
  }
  @ViewChild("myAccount", { read: NgModel })
  myAccount: NgModel;
}
