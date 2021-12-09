import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/Services/bookService/book.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-getallbooks',
  templateUrl: './getallbooks.component.html',
  styleUrls: ['./getallbooks.component.scss']
})
export class GetallbooksComponent implements OnInit {
  BookList: any
  BookCount: any
  book:any
  constructor(private bookService: BookService,private router: Router) { }

  ngOnInit(): void {
    this.getAllBooks();
  }

  getAllBooks() {
    this.bookService.getallBookService().subscribe((response: any) => {
      console.log(response);
      this.BookList = response.result;
      this.BookCount = response.result.length;
      console.log(this.BookCount);


    })
  }
  onquickview(book:any){
    localStorage.setItem('bookId',book._id);
    console.log("id",book._id);
    this.router.navigateByUrl('/quickview')
  
  }
 
}