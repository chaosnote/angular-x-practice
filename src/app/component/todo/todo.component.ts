import { Component, OnInit } from '@angular/core';
import { PostService, GetService } from '../../service/ajax.service';

import { IsString, IsDefined, IsInt, IsBoolean, MinLength, ValidateNested, ArrayMinSize, validateSync } from "class-validator";

interface IItem
{
  id: string,
  date: number,
  content: string,
  finish: boolean,
  hasChange: boolean | void,
}

class MyContent
{
  @MinLength(1)
  content: string = "";
}

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit
{

  constructor(
    private get: GetService,
    private post: PostService
  ) { }

  ngOnInit()
  {
    this.findAll();
  }
  src: MyContent = new MyContent();
  list: IItem[];
  private findAll()
  {
    this.get.execute("todo/r").toPromise().then(res => this.list = res.data, err => console.log(err));
  }
  private inProcess: boolean = false;
  onAdd()
  {
    if (this.inProcess) return;
    let err = validateSync(this.src);
    if (err.length > 0)
    {
      // error handler
    }
    else
    {
      this.inProcess = true;
      this.post.execute("todo/c", {
        list: [
          this.src
        ]
      }).toPromise().then(res => console.log(res), err => console.log(err)) // 處理成功失敗
        .then(() =>
        {
          this.inProcess = false;
          this.src.content = "";
          this.findAll();
        })
    }
  }

  onChange(item: IItem)
  {
    item.hasChange = true;
  }

  onUpdate(item: IItem)
  {
    if (item.hasChange == undefined)
    {
      alert("no value change");
      return;
    }
    if (this.inProcess) return;
    this.inProcess = true;
    this.post.execute("todo/u", {
      id: item.id,
      finish: item.finish
    }).toPromise()
      .then(res => console.log(res), err => console.log(err)) // 處理成功失敗
      .then(() =>
      {
        this.inProcess = false;
        this.findAll();
      })
  }

  onDel(item: IItem)
  {
    if (this.inProcess) return;
    this.inProcess = true;
    this.post.execute("todo/d", {
      id: item.id
    }).toPromise()
      .then(res => console.log(res), err => console.log(err)) // 處理成功失敗
      .then(() =>
      {
        this.inProcess = false;
        this.findAll();
      })
  }
}