import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpService/http.service';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  token: any

  constructor(private httpService: HttpService) {
    this.token = localStorage.getItem('token')
  }


 getallBookService() {

    

    let headers = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': this.token
      })

    }
    return this.httpService.getService('get/book',true, headers)
  }
}
