import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-displaybooks',
  templateUrl: './displaybooks.component.html',
  styleUrls: ['./displaybooks.component.scss']
})
export class DisplaybooksComponent implements OnInit {
 @Input() booksarray: any
  constructor() { }

  ngOnInit(): void {
  }

}
