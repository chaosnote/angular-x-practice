import { Component, OnInit } from '@angular/core';

import { GetService, PostService } from '../../service/ajax.service';

@Component({
  selector: 'app-test-service',
  templateUrl: './test-service.component.html',
  styleUrls: ['./test-service.component.css']
})
export class TestServiceComponent implements OnInit
{

  constructor(private get: GetService, private post: PostService) { }

  ngOnInit()
  {
  }

  onGet()
  {
    this.get.execute("test", { time: new Date().getTime() }).toPromise().then(res => console.log(res)).catch(err => console.log(err));
  }

  onPost()
  {
    this.post.execute("test", { message: "call post" }).toPromise().then(res => console.log(res)).catch(err => console.log(err));
  }
}
