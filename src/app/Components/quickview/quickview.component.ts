import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/Services/bookService/book.service';

@Component({
  selector: 'app-quickview',
  templateUrl: './quickview.component.html',
  styleUrls: ['./quickview.component.scss']
})
export class QuickviewComponent implements OnInit {
  bookId: any
  data: any
  books:any
  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.bookId = localStorage.getItem("bookId");
    console.log(this.bookId);
    this.getbookdetail();
  }

  getbookdetail() {
    this.bookService.getallBookService().subscribe(
      (response: any) => {
        response.result.forEach((element: any) => {
          if (element._id == this.bookId) {
            this.data = element;
          }
        });
      },
      (error) => console.log(error)
    )
  }
}
