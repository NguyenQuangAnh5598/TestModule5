import { Component, OnInit } from '@angular/core';
import {Book} from '../../module/Book';
import {BookService} from '../../service/book.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  book: Book;

  constructor(private bookService: BookService,
              private activeRouter: ActivatedRoute) {
  }


  ngOnInit(): void {
    this.activeRouter.paramMap.subscribe(bookId => {
        const id = +bookId.get('id');
        this.bookService.findBookByID(id).subscribe(book => {
            this.book = book;
          }
        );
      }
    );
  }
}
