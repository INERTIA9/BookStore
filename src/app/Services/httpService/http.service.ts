import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  BaseUrl = environment.BaseUrl
  constructor(private httpClient: HttpClient) { }

  postService(url: string = '', reqPayload: Object = {}, token: boolean = false, httpOptions: any = {}) {
    console.log(reqPayload);
    return this.httpClient.post(this.BaseUrl + url, reqPayload, token && httpOptions)

  }
  
  getService(url: string = '', token: boolean = false, httpOptions: any = null) {

    return this.httpClient.get(this.BaseUrl + url, token && httpOptions)
  }
}

