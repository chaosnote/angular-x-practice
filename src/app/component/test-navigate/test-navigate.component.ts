import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//@see https://angular.io/api/router/Router

@Component({
  selector: 'app-test-navigate',
  templateUrl: './test-navigate.component.html',
  styleUrls: ['./test-navigate.component.css']
})
export class TestNavigateComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onMode_1()
  {
    // 設定值
    this.router.navigate(["test-navigate"], { queryParams: {time:new Date().getTime()} });
  }
  onMode_2()
  {
    // 留意此模式，需在 router 註冊
    this.router.navigateByUrl(`test-navigate/time/${new Date().getTime()}` ) ;
    // this.router.navigateByUrl(`test-navigate/time/${new Date().getTime()}`, { skipLocationChange: true } ) ; // 不更新網址顯示
  }
}
