import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

//@see https://angular.io/api/router/Router

@Component({
  selector: 'app-test-navigate',
  templateUrl: './test-navigate.component.html',
  styleUrls: ['./test-navigate.component.css']
})
export class TestNavigateComponent implements OnInit, OnDestroy {

  constructor(private router: Router, private activeRoute: ActivatedRoute) { }

  private paramSubscribe : Subscription ;
  ngOnInit() {
    this.paramSubscribe = this.activeRoute.queryParams.subscribe(res=>{
      console.log(res) ;
    }) ;
  }
  ngOnDestroy(): void
  {
    this.paramSubscribe.unsubscribe() ;
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
