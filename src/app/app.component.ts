import { Component, OnInit } from '@angular/core';

interface IPath
{
  name : string,
  value : string,
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit
{
  ngOnInit()
  {
    this.data = [
      {
        name : "Home",
        value : "/" //TODO: 暫時不加說明頁
      },
      {
        name : "Directive",
        value : "/test-direct"
      },
      {
        name : "Pipe",
        value : "/test-pipe"
      },
      {
        name : "Service",
        value : "/test-service"
      },
      {
        name : "Navigate",
        value : "/test-navigate"
      },
      {
        name : "Shared",
        value : "/test-shared"
      },
      {
        name : "Anime",
        value : "/test-anime"
      },
    ] ;
  }
  data : IPath[] ;
}
