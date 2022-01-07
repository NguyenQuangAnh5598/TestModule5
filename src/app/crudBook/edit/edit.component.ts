import { Component, OnInit } from '@angular/core';
import {Book} from '../../module/Book';
import {BookService} from '../../service/book.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  book: Book;

  constructor(private bookService: BookService,
              private activeRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.activeRouter.paramMap.subscribe(bookID => {
        const id = +bookID.get('id');
        this.bookService.findBookByID(id).subscribe(book => {
            this.book = book;
          }
        );
      }
    );
  }
  ngSubmit() {
    this.bookService.editStudent(this.book.id,this.book).subscribe();
  }
}
