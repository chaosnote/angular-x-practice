import { Injectable } from '@angular/core';
import { Http, RequestOptions, RequestOptionsArgs, Headers } from '@angular/http';

import { Observable, Subscription } from 'rxjs';
import { environment } from '../../environments/environment';

import 'rxjs/Rx';

function getAPIPath(action: string)
{
  return `${environment.api}${action}`;
}

@Injectable()
export class GetService
{
  constructor(private http: Http) { }

  private options: RequestOptions = new RequestOptions(<RequestOptionsArgs>{
    headers: new Headers({
      'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
    }),
    withCredentials: true
  });

  execute<T>(action: string): Observable<T>
  {
    return this.http.get(getAPIPath(action), this.options)
      .map(res => res.json())
      .catch(res => Observable.throw("非預期網路錯誤"));
  }
}

@Injectable()
export class PostService
{
  constructor(private http: Http) { }

  private options: RequestOptions = new RequestOptions({
    withCredentials: true
  });

  execute<T>(action: string, body?: any): Observable<T>
  {
    return this.http.post(getAPIPath(action), body, this.options)
      .map(res => res.json())
      .catch(res => Observable.throw("非預期網路錯誤"));
  }
}