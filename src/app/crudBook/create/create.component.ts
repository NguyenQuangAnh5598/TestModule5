import {Component, OnInit} from '@angular/core';
import {Book} from '../../module/Book';
import {BookService} from '../../service/book.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  form: any = {};
  book: Book;
  status = `Please điền vào đây`;

  constructor(private bookService: BookService) {
  }

  ngOnInit(): void {
  }

  ngSubmit() {
    this.book = new Book(
      this.form.title,
      this.form.author,
      this.form.description
    );
    this.bookService.createBook(this.book).subscribe();
  }

}
