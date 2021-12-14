import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from 'src/app/Services/bookService/book.service';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  value = '';

  constructor(private router: Router,private bookService: BookService) {
   
   }
  
  ngOnInit(): void {
    
  }
  onWishList() {
    this.router.navigateByUrl('/homepage/wishlist')
  }

  oncart(){
    this.router.navigateByUrl('/homepage/getcart')
  }
  logout() {
    localStorage.removeItem('token');
    this.router.navigateByUrl('/login-signup');
  }
  onprofile(){
    this.router.navigateByUrl('/homepage/profile')
  }
  
 
}
